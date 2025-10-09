'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SliderWrapper, SliderContent, SliderItem } from './styles';
import { useRouter } from 'next/navigation';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Raymond', logo: '/raymond.webp' },
  { name: 'Siyarams', logo: '/siyarams.png' },
  { name: 'Ocm', logo: '/ocm.gif' },
  { name: 'Linen Club', logo: '/linenclub.webp' },
  { name: 'J Hampstead', logo: '/jhamps.jpg' },
  { name: 'Cadini Italy', logo: '/cadini.jpg' },
  { name: 'Birla Century', logo: '/birlacentury.avif' },
];

// Utility to convert brand name to slug
const toSlug = (name: string) =>
  name.trim().toLowerCase().replace(/\s+/g, '-');

export const BrandSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let position = 0;
    const speed = 1;

    let animationFrame: number;

    const scroll = () => {
      position += speed;
      if (position >= slider.scrollWidth / 2) position = 0;
      slider.scrollLeft = position;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate brands for seamless scroll
  const allBrands = [...brands, ...brands];

  return (
    <SliderWrapper ref={sliderRef}>
      <SliderContent>
        {allBrands.map((brand, idx) => (
          <SliderItem
            key={idx}
            onClick={() => router.push(`/partner?slug=${toSlug(brand.name)}`)}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={60}
            />
          </SliderItem>
        ))}
      </SliderContent>
    </SliderWrapper>
  );
};

export default BrandSlider;
