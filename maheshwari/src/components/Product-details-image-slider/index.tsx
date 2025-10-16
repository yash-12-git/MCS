"use client";

import React, { useState, useEffect } from "react";
import { DesktopSlider, Dot, Dots, MainImage, MobileSlider, SliderTrack, Thumbnail, Thumbnails } from "./styles";
import Image from "next/image";

interface ProductImageSliderProps {
  images?: string[];
}

const ProductImageSlider = ({images}:ProductImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <MobileSlider>
        <SliderTrack style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images?.map((img, index) => (
            <div className="slide" key={index}>
              <Image src={img} alt={`Slide ${index + 1}`} width={100} height={100}/>
            </div>
          ))}
        </SliderTrack>

        <Dots>
          {images?.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Dots>
      </MobileSlider>
    );
  }

  return (
    <DesktopSlider>
      <Thumbnails>
        {images?.map((img, index) => (
          <Thumbnail
            key={index}
            onClick={() => setActiveIndex(index)}
            isActive={index === activeIndex}
          >
            <Image src={img} alt={`Thumbnail ${index + 1}`} width={15} height={15} />
          </Thumbnail>
        ))}
      </Thumbnails>

      <MainImage>
        <Image src={images?.[activeIndex] || ""} priority alt={`Product Image ${activeIndex + 1}`} width={600} height={600} />
      </MainImage>
    </DesktopSlider>
  );
};

export default ProductImageSlider;
