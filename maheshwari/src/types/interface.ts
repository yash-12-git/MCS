import { availablityType } from "@/app/constants";

export interface FilterValues {
  color: string | null;
  size: string | null;
  fabric: string | null;
  availability: availablityType.inStock | availablityType.outOfStock | "";
  minPrice: number;
  maxPrice: number;
}

export interface IProductDetails {
  /** The base color of the product (as shown) */
  color: string;
  /** Material or fabric used */
  material: string;
  /** Work or design patterns on the product */
  work?: string[];
  /** Care instructions for material */
  materialCare: string;
  /** Important disclaimer notes */
  disclaimer?: string;
}

export interface IProductListing {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;

  /** Pricing details */
  price: number;
  discountedPrice: number;
  discountPercent: number;

  /** Product display & visuals */
  image: string;
  gallery: string[];

  /** Variants and attributes */
  color: string[]; // Available color variants
  sizes: string[];
  productDetails?: IProductDetails;

  /** Stock and sales info */
  inStock: boolean;
  skuQuantity: number;
  bestSeller?: boolean;
  isNewArrival?: boolean;

  /** Ratings and reviews */
  rating: number;
  reviewCount: number;

  /** Timestamps */
  createdAt: string;
  updatedAt: string;
}

