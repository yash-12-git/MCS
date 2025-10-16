"use client";

import ProductImageSlider from "@/components/Product-details-image-slider";
import { Container } from "./styles";
import useProductDetailsHook from "@/hooks/use-product-details-hook";
import ProductInfoSection from "./product-info";

const ProductDetailsDescriptionComponet = () => {
  const { productDetail, loading } = useProductDetailsHook();
  console.log(productDetail, "line38");
  if (loading) return <></>;
  return (
    <Container>
      <ProductImageSlider images={productDetail?.gallery} />
      <ProductInfoSection productData={productDetail} />
    </Container>
  );
};

export default ProductDetailsDescriptionComponet;
