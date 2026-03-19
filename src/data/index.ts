/* Central index — re-exports all fund category data */
import type { FundCategoryInfo, ParentCategory } from "./fundCategoryData";
export type { FundCategoryInfo, ParentCategory, SampleFund, FAQ } from "./fundCategoryData";
export { slug, companyLogo } from "./fundCategoryData";

import { equityFunds } from "./fundCategoryData";
import { debtFunds } from "./debtFunds";
import { hybridFunds } from "./hybridFunds";

export const allFundCategories: FundCategoryInfo[] = [
  ...equityFunds,
  ...debtFunds,
  ...hybridFunds,
];

/** Look up a single category by parentCategory + slug */
export function findFundCategory(
  parentCategory: string,
  subcategorySlug: string
): FundCategoryInfo | undefined {
  return allFundCategories.find(
    (f) => f.parentCategory === parentCategory && f.slug === subcategorySlug
  );
}

/** Get all funds in a parent category */
export function getFundsByParent(
  parentCategory: ParentCategory
): FundCategoryInfo[] {
  return allFundCategories.filter((f) => f.parentCategory === parentCategory);
}
