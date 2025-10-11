import React from "react";
import { ProductGrid, ProductCard, PriceContainer, Description } from "./styles";
import Image from "next/image";
import { IProductListing } from "@/types/interface";

interface Props {
  products: IProductListing[];
}

export default function ProductList({ products }: Props) {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} outOfStock={!product.inStock}>
          <Image src={product.image} width={300} height={100} alt={product.name} />
          <h3>{product.name}</h3>

          <PriceContainer>
            <span className="discounted">₹{product.discountedPrice}</span>
            <span className="original">₹{product.price}</span>
            <span className="discount">{product.discountPercent}% off</span>
          </PriceContainer>

          <Description>{product.description}</Description>

          {product.bestSeller && <span className="badge">Best Seller</span>}
          {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
