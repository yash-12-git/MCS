import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProductImageSlider from "@/components/Product-details-image-slider";
import PromotionSlider from "@/components/Promotion-slider";

const ProductDetailsModule = () => {
  return (
    <>
      <PromotionSlider />
      <NavBar />
      <ProductImageSlider/>
      <Footer />
    </>
  );
};

export default ProductDetailsModule;
