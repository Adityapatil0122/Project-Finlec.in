import { notFound } from "next/navigation";
import MarketingShell from "@/components/MarketingShell";
import FundCategoryPage from "@/components/FundCategoryPage";
import { findFundCategory, allFundCategories } from "@/data";

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

/* Static generation for all 27 pages */
export function generateStaticParams() {
  return allFundCategories.map((f) => ({
    category: f.parentCategory,
    subcategory: f.slug,
  }));
}

/* Dynamic metadata */
export async function generateMetadata({ params }: PageProps) {
  const { category, subcategory } = await params;
  const data = findFundCategory(category, subcategory);
  if (!data) return { title: "Fund Not Found | Finlec" };

  return {
    title: `Best ${data.title} to Invest in India 2026 | Finlec`,
    description: data.description,
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;
  const data = findFundCategory(category, subcategory);

  if (!data) notFound();

  return (
    <MarketingShell>
      <FundCategoryPage data={data} />
    </MarketingShell>
  );
}
