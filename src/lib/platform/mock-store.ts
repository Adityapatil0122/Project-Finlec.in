import { randomUUID } from "crypto";
import type {
  AdminOpsSnapshot,
  BankMandate,
  FundOption,
  Holding,
  InvestorPlatformState,
  OnboardingTask,
  PlatformOrder,
  SipInstruction,
  SupportTicket,
} from "@/types/platform";

const fundUniverse: FundOption[] = [
  {
    id: "fund-axis-bluechip",
    amcName: "Axis Mutual Fund",
    name: "Axis Bluechip Fund",
    schemeCode: "AXIS1234",
    category: "Large Cap",
    riskLevel: "Moderate",
    minimumInvestment: 500,
    nav: 58.12,
    navDate: "2026-03-11",
  },
  {
    id: "fund-hdfc-flexi",
    amcName: "HDFC Mutual Fund",
    name: "HDFC Flexi Cap Fund",
    schemeCode: "HDFC1002",
    category: "Flexi Cap",
    riskLevel: "Moderate",
    minimumInvestment: 1000,
    nav: 182.4,
    navDate: "2026-03-11",
  },
  {
    id: "fund-sbi-smallcap",
    amcName: "SBI Mutual Fund",
    name: "SBI Small Cap Fund",
    schemeCode: "SBI2301",
    category: "Small Cap",
    riskLevel: "High",
    minimumInvestment: 500,
    nav: 46.81,
    navDate: "2026-03-11",
  },
];

type Store = Map<string, InvestorPlatformState>;

const globalStore = globalThis as typeof globalThis & {
  __finlecPlatformStore?: Store;
};

function getStore() {
  if (!globalStore.__finlecPlatformStore) {
    globalStore.__finlecPlatformStore = new Map<string, InvestorPlatformState>();
  }
  return globalStore.__finlecPlatformStore;
}

function buildOverview(orders: PlatformOrder[], holdings: Holding[], sips: SipInstruction[]) {
  const investedValue = holdings.reduce((sum, item) => sum + item.investedValue, 0);
  const currentValue = holdings.reduce((sum, item) => sum + item.currentValue, 0);
  const unrealizedGain = currentValue - investedValue;
  const nextSipDate =
    sips
      .filter((sip) => sip.status === "ACTIVE")
      .map((sip) => sip.nextRunDate)
      .sort()[0] ?? null;

  return {
    investedValue,
    currentValue,
    unrealizedGain,
    xirr: 14.82,
    pendingOrders: orders.filter((order) =>
      ["PAYMENT_PENDING", "SUBMITTED", "ACCEPTED"].includes(order.status)
    ).length,
    activeSips: sips.filter((sip) => sip.status === "ACTIVE").length,
    nextSipDate,
    kycStatus: "REGISTERED" as const,
  };
}

function buildOnboarding(state: {
  bankMandates: BankMandate[];
  nominations: InvestorPlatformState["nominations"];
  orders: PlatformOrder[];
}) {
  const onboarding: OnboardingTask[] = [
    {
      id: "kyc",
      label: "Complete PAN and KYC review",
      description: "Finish KYC review before making full use of the platform.",
      href: "/dashboard/profile",
      status: "attention",
    },
    {
      id: "bank",
      label: "Verify default bank account",
      description: "Confirm the bank account used for payouts and mandates.",
      href: "/dashboard/profile",
      status: "completed",
    },
    {
      id: "mandate",
      label: "Activate SIP mandate",
      description: "An active UPI AutoPay or eNACH mandate is needed for SIPs.",
      href: "/dashboard/sips",
      status: state.bankMandates.some((item) => item.status === "ACTIVE") ? "completed" : "pending",
    },
    {
      id: "nominee",
      label: "Add nominee declaration",
      description: "Add a nominee or declaration for smoother account servicing.",
      href: "/dashboard/profile",
      status: state.nominations.length > 0 ? "completed" : "pending",
    },
    {
      id: "first-order",
      label: "Place or review first order",
      description: "Track payment status and allotment in one place.",
      href: "/dashboard/invest",
      status: state.orders.length > 0 ? "completed" : "pending",
    },
  ];

  return onboarding;
}

function buildAdminOps(tickets: SupportTicket[], orders: PlatformOrder[]): AdminOpsSnapshot {
  return {
    openKycExceptions: 6,
    mandateFailures: 2,
    unsettledOrders: orders.filter(
      (item) => item.status !== "SETTLED" && item.status !== "ALLOTTED"
    ).length,
    staleWebhooks: 1,
    ticketsEscalated: tickets.filter((item) => item.status === "ESCALATED").length,
    reconciliationHealth: "HEALTHY",
  };
}

function createState(userId: string, fullName: string, email: string): InvestorPlatformState {
  const mandateId = randomUUID();
  const orders: PlatformOrder[] = [
    {
      id: randomUUID(),
      fundId: fundUniverse[0].id,
      fundName: fundUniverse[0].name,
      kind: "LUMPSUM_PURCHASE",
      status: "ALLOTTED",
      amount: 25000,
      units: 430.15,
      paymentRail: "UPI",
      partnerReference: "BSE-ORD-20260311-1842",
      initiatedAt: "2026-03-11T09:18:00.000Z",
      cutOffAt: "2026-03-11T15:00:00.000Z",
    },
    {
      id: randomUUID(),
      fundId: fundUniverse[1].id,
      fundName: fundUniverse[1].name,
      kind: "SIP_REGISTRATION",
      status: "ACCEPTED",
      amount: 5000,
      units: null,
      paymentRail: "UPI_AUTOPAY",
      partnerReference: "BSE-SIP-20260312-4011",
      initiatedAt: "2026-03-12T07:10:00.000Z",
      cutOffAt: "2026-03-12T15:00:00.000Z",
    },
  ];

  const holdings: Holding[] = [
    {
      id: randomUUID(),
      fundId: fundUniverse[0].id,
      fundName: fundUniverse[0].name,
      category: fundUniverse[0].category,
      folioNumber: "9128800135",
      units: 430.15,
      investedValue: 25000,
      currentValue: 27405,
      unrealizedGain: 2405,
      xirr: 14.82,
      lastNav: fundUniverse[0].nav,
      navDate: fundUniverse[0].navDate,
    },
  ];

  const sips: SipInstruction[] = [
    {
      id: randomUUID(),
      fundId: fundUniverse[1].id,
      fundName: fundUniverse[1].name,
      amount: 5000,
      frequency: "MONTHLY",
      nextRunDate: "2026-04-05T00:00:00.000Z",
      mandateReference: `MAND-${mandateId.slice(0, 8)}`,
      status: "ACTIVE",
    },
  ];

  const bankMandates: BankMandate[] = [
    {
      id: mandateId,
      bankAccountId: "bank-primary",
      provider: "NPCI UPI AutoPay",
      rail: "UPI_AUTOPAY",
      mandateReference: `MAND-${mandateId.slice(0, 8)}`,
      status: "ACTIVE",
      maxAmount: 25000,
      validTill: "2029-03-31T00:00:00.000Z",
      authorizedAt: "2026-03-08T09:00:00.000Z",
    },
  ];

  const supportTickets: SupportTicket[] = [
    {
      id: randomUUID(),
      type: "KYC",
      status: "IN_PROGRESS",
      subject: "Need KYC validation before new investments",
      description: "Please review my KYC checklist and let me know the next step.",
      createdAt: "2026-03-10T10:00:00.000Z",
      responseDueAt: "2026-03-15T18:00:00.000Z",
    },
  ];

  const state: InvestorPlatformState = {
    funds: fundUniverse,
    overview: buildOverview(orders, holdings, sips),
    onboarding: [],
    profile: {
      fullName,
      email,
      phone: "9876543210",
      dateOfBirth: "1993-08-16",
      panMasked: "ABCDE****F",
      kraReference: "KRA-VALID-30215",
      ckycReference: "CKYC-99120191",
      taxStatus: "INDIVIDUAL",
      residencyStatus: "RESIDENT_INDIAN",
      occupation: "Software Engineer",
      annualIncomeBand: "INR 10L - 25L",
      riskProfile: "MODERATE",
      kycStatus: "REGISTERED",
      emailVerified: true,
      mobileVerified: true,
      fatcaAcceptedAt: "2026-03-08T08:30:00.000Z",
      lastUpdatedAt: "2026-03-12T10:45:00.000Z",
    },
    bankAccounts: [
      {
        id: "bank-primary",
        bankName: "HDFC Bank",
        accountHolderName: fullName,
        maskedAccountNumber: "XXXXXX1832",
        ifscCode: "HDFC0000211",
        accountType: "Savings",
        status: "VERIFIED",
        isDefault: true,
      },
    ],
    bankMandates,
    nominations: [],
    folios: [
      {
        id: randomUUID(),
        folioNumber: "9128800135",
        amcName: fundUniverse[0].amcName,
        fundId: fundUniverse[0].id,
        holderMode: "SINGLE",
        brokerCode: "ARN-225204",
        euin: "E123456",
        rtaProvider: "CAMS",
      },
    ],
    holdings,
    orders,
    sips,
    statements: [
      {
        id: randomUUID(),
        type: "ACCOUNT_STATEMENT",
        label: "Investor Account Statement",
        generatedAt: "2026-03-12T12:00:00.000Z",
        periodLabel: "Mar 2026",
        source: "CAMS",
      },
      {
        id: randomUUID(),
        type: "TRANSACTION_REPORT",
        label: "Transaction Activity Report",
        generatedAt: "2026-03-12T12:00:00.000Z",
        periodLabel: "FY 2025-26",
        source: "Finlec Ledger",
      },
    ],
    supportTickets,
    auditTrail: [
      {
        id: randomUUID(),
        action: "KYC_REVIEW_REQUESTED",
        entityType: "InvestorProfile",
        entityLabel: "PAN and KYC update",
        createdAt: "2026-03-10T10:00:00.000Z",
      },
      {
        id: randomUUID(),
        action: "ORDER_ALLOTTED",
        entityType: "Order",
        entityLabel: fundUniverse[0].name,
        createdAt: "2026-03-11T13:45:00.000Z",
      },
    ],
    adminOps: {
      openKycExceptions: 0,
      mandateFailures: 0,
      unsettledOrders: 0,
      staleWebhooks: 0,
      ticketsEscalated: 0,
      reconciliationHealth: "HEALTHY",
    },
  };

  state.onboarding = buildOnboarding(state);
  state.adminOps = buildAdminOps(state.supportTickets, state.orders);
  return state;
}

function hydrateState(state: InvestorPlatformState) {
  state.overview = buildOverview(state.orders, state.holdings, state.sips);
  state.onboarding = buildOnboarding(state);
  state.adminOps = buildAdminOps(state.supportTickets, state.orders);
  state.profile.kycStatus = state.overview.kycStatus;
  state.profile.lastUpdatedAt = new Date().toISOString();
  return state;
}

export function getOrCreatePlatformState(userId: string, fullName: string, email: string) {
  const store = getStore();
  const existing = store.get(userId);
  if (existing) {
    return hydrateState(existing);
  }

  const created = createState(userId, fullName, email);
  store.set(userId, created);
  return created;
}

export function updateInvestorProfile(
  userId: string,
  payload: {
    dateOfBirth: string;
    panNumber: string;
    occupation: string;
    annualIncomeBand: string;
    riskProfile: "LOW" | "MODERATE" | "HIGH";
  }
) {
  const store = getStore();
  const state = store.get(userId);
  if (!state) return null;

  state.profile.dateOfBirth = payload.dateOfBirth;
  state.profile.panMasked = `${payload.panNumber.slice(0, 5)}****${payload.panNumber.slice(-1)}`;
  state.profile.occupation = payload.occupation;
  state.profile.annualIncomeBand = payload.annualIncomeBand;
  state.profile.riskProfile = payload.riskProfile;
  state.profile.kycStatus = "REGISTERED";
  state.auditTrail.unshift({
    id: randomUUID(),
    action: "PROFILE_UPDATED",
    entityType: "InvestorProfile",
    entityLabel: "Profile details updated",
    createdAt: new Date().toISOString(),
  });
  return hydrateState(state);
}

export function createPlatformOrder(
  userId: string,
  payload: {
    fundId: string;
    kind: "LUMPSUM_PURCHASE" | "SIP_REGISTRATION";
    amount: number;
    paymentRail: "UPI" | "NETBANKING" | "UPI_AUTOPAY";
    frequency?: "MONTHLY" | "QUARTERLY";
  }
) {
  const store = getStore();
  const state = store.get(userId);
  if (!state) return null;

  const fund = state.funds.find((item) => item.id === payload.fundId);
  if (!fund) return null;

  const order: PlatformOrder = {
    id: randomUUID(),
    fundId: fund.id,
    fundName: fund.name,
    kind: payload.kind,
    status: payload.kind === "SIP_REGISTRATION" ? "ACCEPTED" : "PAYMENT_PENDING",
    amount: payload.amount,
    units: payload.kind === "LUMPSUM_PURCHASE" ? Number((payload.amount / fund.nav).toFixed(3)) : null,
    paymentRail: payload.paymentRail,
    partnerReference: `FINLEC-${Math.floor(Math.random() * 900000 + 100000)}`,
    initiatedAt: new Date().toISOString(),
    cutOffAt: new Date().toISOString(),
  };

  state.orders.unshift(order);
  if (payload.kind === "SIP_REGISTRATION") {
    state.sips.unshift({
      id: randomUUID(),
      fundId: fund.id,
      fundName: fund.name,
      amount: payload.amount,
      frequency: payload.frequency ?? "MONTHLY",
      nextRunDate: "2026-04-05T00:00:00.000Z",
      mandateReference: state.bankMandates[0]?.mandateReference ?? "MAND-PENDING",
      status: "ACTIVE",
    });
  }

  state.auditTrail.unshift({
    id: randomUUID(),
    action: payload.kind === "SIP_REGISTRATION" ? "SIP_REGISTERED" : "ORDER_INITIATED",
    entityType: "Order",
    entityLabel: fund.name,
    createdAt: new Date().toISOString(),
  });

  return hydrateState(state);
}

export function createSupportTicket(
  userId: string,
  payload: {
    type: SupportTicket["type"];
    subject: string;
    description: string;
  }
) {
  const store = getStore();
  const state = store.get(userId);
  if (!state) return null;

  state.supportTickets.unshift({
    id: randomUUID(),
    type: payload.type,
    status: "OPEN",
    subject: payload.subject,
    description: payload.description,
    createdAt: new Date().toISOString(),
    responseDueAt: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(),
  });

  state.auditTrail.unshift({
    id: randomUUID(),
    action: "SUPPORT_TICKET_CREATED",
    entityType: "SupportTicket",
    entityLabel: payload.subject,
    createdAt: new Date().toISOString(),
  });

  return hydrateState(state);
}

export function updateSipStatus(userId: string, sipId: string, status: SipInstruction["status"]) {
  const store = getStore();
  const state = store.get(userId);
  if (!state) return null;

  const sip = state.sips.find((item) => item.id === sipId);
  if (!sip) return null;
  sip.status = status;

  state.auditTrail.unshift({
    id: randomUUID(),
    action: `SIP_${status}`,
    entityType: "SipInstruction",
    entityLabel: sip.fundName,
    createdAt: new Date().toISOString(),
  });

  return hydrateState(state);
}
