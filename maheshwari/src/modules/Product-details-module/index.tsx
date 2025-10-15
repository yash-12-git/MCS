import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import PromotionSlider from "@/components/Promotion-slider";
import ProductDetailsDescriptionComponet from "./product-details";

const ProductDetailsModule = () => {
   
  return (
    <>
      <PromotionSlider />
      <NavBar />
      <ProductDetailsDescriptionComponet/>
      <Footer />
    </>
  );
};

export default ProductDetailsModule;
