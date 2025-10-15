"use client";

import HomePageBanner from "@/components/Home-page-banner";
import NavBar from "@/components/Navbar";
import PromotionSlider from "@/components/Promotion-slider";
import ShopByProductCategory from "./Category-slider";
import BrandSlider from "@/components/Brand-slider";
import ShopByFabricType from "./shop-by-fabric-type";
import CustomerReviews from "@/components/Customer-review";
import SocialMediaPromotionStrip from "@/components/social-medial-promotion-strip";
import Footer from "@/components/Footer";

export default function HomePageModule() {
  return (
    <>
      <PromotionSlider />
      <NavBar />
      <HomePageBanner />
      <ShopByProductCategory />
      <BrandSlider />
      <ShopByFabricType />
      <CustomerReviews />
      <SocialMediaPromotionStrip />
      <Footer />
    </>
  );
}