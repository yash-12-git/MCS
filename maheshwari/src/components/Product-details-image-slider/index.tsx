"use client";

import React, { useState, useEffect } from "react";
import { DesktopSlider, Dot, Dots, MainImage, MobileSlider, SliderTrack, Thumbnail, Thumbnails } from "./styles";

interface ProductImageSliderProps {
  images: string[];
}

const ProductImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
const images = ['/wool.png', '/silk.png', '/linen.png', '/coat.jpeg']

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
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </SliderTrack>

        <Dots>
          {images.map((_, index) => (
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
        {images.map((img, index) => (
          <Thumbnail
            key={index}
            onClick={() => setActiveIndex(index)}
            isActive={index === activeIndex}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </Thumbnail>
        ))}
      </Thumbnails>

      <MainImage>
        <img src={images[activeIndex]} alt={`Product Image ${activeIndex + 1}`} />
      </MainImage>
    </DesktopSlider>
  );
};

export default ProductImageSlider;
