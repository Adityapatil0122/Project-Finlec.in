import type { FundSnapshot } from "@/types/mfapi";

const MFAPI_BASE = "https://api.mfapi.in/mf";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

type MfSearchResult = {
  schemeCode: string;
  schemeName: string;
};

type MfHistoryRow = {
  date: string;
  nav: string;
};

type MfHistory = {
  meta?: {
    scheme_code?: string;
    scheme_name?: string;
  };
  data?: MfHistoryRow[];
};

type CacheEntry = {
  value: FundSnapshot | null;
  ts: number;
};

const snapshotCache = new Map<string, CacheEntry>();

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function scoreMatch(query: string, candidate: string) {
  const q = normalize(query);
  const c = normalize(candidate);
  if (!q || !c) return 0;

  let score = 0;
  if (c === q) score += 220;
  if (c.startsWith(q)) score += 120;
  if (c.includes(q)) score += 80;

  const qWords = new Set(q.split(" "));
  const cWords = new Set(c.split(" "));
  let common = 0;
  qWords.forEach((w) => {
    if (cWords.has(w)) common += 1;
  });
  score += common * 12;
  score += Math.min(c.length, 120) / 10;
  return score;
}

function pickBestMatch(query: string, results: MfSearchResult[]) {
  let best: MfSearchResult | null = null;
  let bestScore = -1;
  results.forEach((result) => {
    const score = scoreMatch(query, result.schemeName);
    if (score > bestScore) {
      bestScore = score;
      best = result;
    }
  });
  return best;
}

function parseDateToUtc(dateValue: string) {
  const parts = dateValue.split("-");
  if (parts.length !== 3) return null;

  if (parts[0].length === 4) {
    const [year, month, day] = parts;
    return Date.UTC(Number(year), Number(month) - 1, Number(day));
  }

  const [day, month, year] = parts;
  return Date.UTC(Number(year), Number(month) - 1, Number(day));
}

function parseNav(value: string) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function findNavOnOrBefore(history: { ts: number; nav: number }[], targetTs: number) {
  for (let i = 0; i < history.length; i += 1) {
    if (history[i].ts <= targetTs) {
      return history[i];
    }
  }
  return null;
}

function calculateCagr(latestNav: number, pastNav: number, years: number) {
  if (latestNav <= 0 || pastNav <= 0 || years <= 0) return null;
  const ratio = latestNav / pastNav;
  return (Math.pow(ratio, 1 / years) - 1) * 100;
}

async function searchScheme(query: string): Promise<MfSearchResult[]> {
  const response = await fetch(
    `${MFAPI_BASE}/search?q=${encodeURIComponent(query)}`,
    { next: { revalidate: 12 * 60 * 60 } }
  );
  if (!response.ok) return [];
  const data = (await response.json()) as MfSearchResult[];
  return Array.isArray(data) ? data : [];
}

async function fetchHistory(schemeCode: string): Promise<MfHistory | null> {
  const response = await fetch(`${MFAPI_BASE}/${schemeCode}`, {
    next: { revalidate: 6 * 60 * 60 },
  });
  if (!response.ok) return null;
  return (await response.json()) as MfHistory;
}

export async function getFundSnapshotByName(name: string): Promise<FundSnapshot | null> {
  const cached = snapshotCache.get(name);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return cached.value;
  }

  try {
    const searchResults = await searchScheme(name);
    if (!searchResults.length) {
      snapshotCache.set(name, { value: null, ts: Date.now() });
      return null;
    }

    const best = pickBestMatch(name, searchResults);
    if (!best) {
      snapshotCache.set(name, { value: null, ts: Date.now() });
      return null;
    }

    const history = await fetchHistory(best.schemeCode);
    const rows = history?.data ?? [];
    const parsedRows = rows
      .map((row) => {
        const ts = parseDateToUtc(row.date);
        const nav = parseNav(row.nav);
        if (!ts || nav === null) return null;
        return { ts, nav, date: row.date };
      })
      .filter((row): row is { ts: number; nav: number; date: string } => Boolean(row))
      .sort((a, b) => b.ts - a.ts);

    if (!parsedRows.length) {
      snapshotCache.set(name, { value: null, ts: Date.now() });
      return null;
    }

    const latest = parsedRows[0];
    const previous = parsedRows[1];
    const navChangePct =
      previous && previous.nav > 0 ? ((latest.nav - previous.nav) / previous.nav) * 100 : null;

    const nowTs = latest.ts;
    const oneYear = 365.25 * 24 * 60 * 60 * 1000;
    const nav1Y = findNavOnOrBefore(parsedRows, nowTs - oneYear);
    const nav3Y = findNavOnOrBefore(parsedRows, nowTs - oneYear * 3);
    const nav5Y = findNavOnOrBefore(parsedRows, nowTs - oneYear * 5);

    const snapshot: FundSnapshot = {
      name,
      schemeCode: best.schemeCode,
      schemeName: best.schemeName,
      nav: latest.nav,
      navDate: latest.date,
      navChangePct: navChangePct ?? undefined,
      return1Y: nav1Y ? calculateCagr(latest.nav, nav1Y.nav, 1) ?? undefined : undefined,
      return3Y: nav3Y ? calculateCagr(latest.nav, nav3Y.nav, 3) ?? undefined : undefined,
      return5Y: nav5Y ? calculateCagr(latest.nav, nav5Y.nav, 5) ?? undefined : undefined,
    };

    snapshotCache.set(name, { value: snapshot, ts: Date.now() });
    return snapshot;
  } catch {
    snapshotCache.set(name, { value: null, ts: Date.now() });
    return null;
  }
}
