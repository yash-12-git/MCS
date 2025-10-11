import { availablityType } from "@/app/constants";
import { allProducts } from "@/mock-data/product-listing-data";
import { FilterValues } from "@/types/interface";
import { NextResponse } from "next/server";

// 🧠 Utility: simulate delay
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 🧩 GET /api/products?category=suits&size=M&color=blue&sort=price_asc&page=1
export async function GET(request: Request) {
  await delay(300); // simulate network delay

  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category") || "";
  const size = searchParams.get("size") || "";
  const color = searchParams.get("color") || "";
  const fabric = searchParams.get("fabric") || "";
  const availability = searchParams.get("availability") as availablityType  || "";
  const sort = searchParams.get("sort") || "";
  const minPrice = Number(searchParams.get("minPrice") || 0);
  const maxPrice = Number(searchParams.get("maxPrice") || Infinity);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "6", 10);

  const isCategoryBestSeller = category === "best-sellers";

  // 🧮 Filtering
  const filtered = allProducts.filter((p) => {
    const matchCategory = !isCategoryBestSeller ? p.category.toLowerCase()===category.toLowerCase() : p.bestSeller;
    const matchSize = size ? p.sizes.includes(size) : true;
    const matchColor = color
      ? p.color.some((c) => c.toLowerCase() === color.toLowerCase())
      : true;
    const matchFabric = fabric ? p.fabricType.toLowerCase() === fabric.toLowerCase() : true;
    const matchAvailability =
      availability === availablityType.inStock
        ? p.inStock
        : availability === availablityType.outOfStock
        ? !p.inStock
        : true;
    const matchPrice = p.discountedPrice >= minPrice && p.discountedPrice <= maxPrice;
        
    return (
      matchCategory &&
      matchSize &&
      matchColor &&
      matchFabric &&
      matchAvailability &&
      matchPrice
    );
  });
  

  // 🧾 Sorting
  switch (sort) {
    case "price_asc":
      filtered.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case "price_desc":
      filtered.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
  }

  // 🧱 Pagination
  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  const paginated = filtered.slice(start, end);

  // ✅ Response
  return NextResponse.json({
    products: paginated,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    hasMore: end < total,
    filters: {
      size,
      color,
      fabric,
      availability,
      minPrice,
      maxPrice
    } satisfies FilterValues,
  });
}
