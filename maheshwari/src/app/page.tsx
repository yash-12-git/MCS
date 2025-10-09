'use client';
import BrandSlider from "@/components/Brand-slider";
import HomePageBanner from "@/components/Home-page-banner";
import NavBar from "@/components/Navbar";
import { PromotionSlider } from "@/components/Promotion-slider";

export default function Home() {
  return (
    <>
      <PromotionSlider />
      <NavBar/>
      <HomePageBanner  />
      <BrandSlider/>
    </>
  );
}
