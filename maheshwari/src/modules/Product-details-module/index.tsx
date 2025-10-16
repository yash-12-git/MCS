"use client"

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import PromotionSlider from "@/components/Promotion-slider";
import useProductDetailsHook from "@/hooks/use-product-details-hook";
import SimilarProducts from "./similar-products";
import ProductInfoSection from "./product-info";
import ProductImageSlider from "@/components/Product-details-image-slider";
import { Container } from "./styles";

const ProductDetailsModule = () => {
  const {
    productDetail,
    loading,
    loadingSimilarProducts,
    similarProductDetail,
  } = useProductDetailsHook();
  return (
    <>
      <PromotionSlider />
      <NavBar />
      <Container>
        <ProductImageSlider
          images={productDetail?.gallery}
          loadingProductDetails={loading}
        />
        <ProductInfoSection
          productData={productDetail}
          loadingProductDetails={loading}
        />
      </Container>
      <SimilarProducts
        products={similarProductDetail}
        loading={loadingSimilarProducts}
      />
      <Footer />
    </>
  );
};

export default ProductDetailsModule;
