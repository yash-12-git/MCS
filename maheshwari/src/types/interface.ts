import { availablityType } from "@/app/constants";

export interface FilterValues {
  color: string | null;
  size: string | null;
  fabric: string | null;
  availability: availablityType.inStock | availablityType.outOfStock | "";
  minPrice: number;
  maxPrice: number;
}

export interface IProductListing {
  id: number;
  name: string;
  category: string;
  description: string;
  discountedPrice: number;
  discountPercent: number;
  fabricType: string;
  price: number;
  image: string;
  color: string[];
  fabric: string;
  inStock: boolean;
  sizes: string[];
  bestSeller: boolean;
  rating: number;
  reviewCount: number;
  gallery: string[];
  skuQuantity: number;
  createdAt: string;
  updatedAt: string;
  materialCare: string
}
