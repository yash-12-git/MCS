import React from "react";
import {
  ProductGrid,
  ProductCard,
  PriceContainer,
  Description,
  NoProductSection,
  DescriptionContainer,
} from "./styles";
import Image from "next/image";
import { IProductListing } from "@/types/interface";
import { useRouter } from "next/navigation";

interface Props {
  products: IProductListing[];
  isLoading: boolean;
}

export default function ProductList({ products, isLoading = false }: Props) {
  const router = useRouter();
  if (!products.length) {
    return (
      <NoProductSection isLoading>
        <h3>{isLoading ? "Loading products..." : "No Product Available!!"}</h3>
        <p>
          {isLoading
            ? "Please wait while we fetch your collection"
            : "Try adjusting or clearing your filters."}
        </p>
      </NoProductSection>
    );
  }
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          outOfStock={!product.inStock}
          onClick={() => router.push(`/product-details/${product.slug}`)}
        >
          <Image
            src={product.image}
            width={300}
            height={100}
            alt={product.name}
          />
          <DescriptionContainer>
               <h3>{product.name}</h3>

          <PriceContainer>
            <span className="discounted">₹{product.discountedPrice}</span>
            <span className="original">₹{product.price}</span>
            <span className="discount">{product.discountPercent}% off</span>
          </PriceContainer>

          <Description>{product.description}</Description>

          {product.bestSeller && <span className="badge">Best Seller</span>}
          {!product.inStock && (
            <span className="out-of-stock">Out of Stock</span>
          )}
          </DescriptionContainer>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
