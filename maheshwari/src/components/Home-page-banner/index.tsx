'use client';

import Image from 'next/image';
import { BannerButton, BannerContainer, BannerContent, ImageWrapper } from './styles';

interface BannerProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const HomePageBanner = ({
  imageSrc = "/banner-img.png",
  title = "Wrap Yourself in Luxury: Maheshwari’s Finest Fabrics",
  subtitle="Discover vibrant colors, intricate designs, and timeless elegance.",
  buttonText = "Shop all fabrics",
}: BannerProps) => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </ImageWrapper>

      <BannerContent>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {buttonText && <BannerButton>{buttonText}</BannerButton>}
      </BannerContent>
    </BannerContainer>
  );
};

export default HomePageBanner;
