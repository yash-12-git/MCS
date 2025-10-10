"use client";
import BrandSlider from "@/components/Brand-slider";
import CustomerReviews from "@/components/Customer-review";
import Footer from "@/components/Footer";
import HomePageBanner from "@/components/Home-page-banner";
import NavBar from "@/components/Navbar";
import PromotionSlider from "@/components/Promotion-slider";
import SocialMediaPromotionStrip from "@/components/social-medial-promotion-strip";
import ShopByProductCategory from "@/modules/Category-slider";
import ShopByFabric from "@/modules/shop-by-fabric-type";

export default function Home() {
  return (
    <>
      <PromotionSlider />
      <NavBar />
      <HomePageBanner />
      <ShopByProductCategory />
      <BrandSlider />
      <ShopByFabric />
      <CustomerReviews />
      <SocialMediaPromotionStrip />
      <Footer />
    </>
  );
}
