"use client";
import ProductList from "@/modules/Product-listing-module/Product-grid";
import { IProductListing } from "@/types/interface";
import { Container } from "./styles";

const SimilarProducts = ({
  products,
  loading,
}: {
  products: IProductListing[] | undefined;
  loading: boolean;
}) => {
  return (
    <Container>
      <h2>You may also like</h2>
      <ProductList products={products} isLoading={loading} />
    </Container>
  );
};

export default SimilarProducts;
