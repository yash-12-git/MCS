import { allProducts } from "@/mock-data/product-listing-data";
import { NextResponse } from "next/server";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  await delay(300);

  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug") || "";
  const productCategory = allProducts.find(
    (item) => item.slug === slug
  )?.category;
  const filteredData = allProducts.filter(
    (item) => item.category === productCategory && item.slug !== slug
  );

  return NextResponse.json({
    product: filteredData,
  });
}
