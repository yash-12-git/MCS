'use client';

import Image from 'next/image';
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  ImageWrapper,
} from './styles';

interface BannerProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const HomePageBanner = ({
  imageSrc = "/banner-img.png",
  title = "Experience the Art of Fine Living with our Exquisite Fabrics and Designs.",
  subtitle = "Discover vibrant colors, and timeless elegance.",
  buttonText = "Explore Collections",
}: BannerProps) => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "auto",
          }}
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
