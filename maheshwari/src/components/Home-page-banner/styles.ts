import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  min-height: 28.125rem;
  max-height: 46.8rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
    min-height: 15.6rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 4rem;
  color: ${colors.beige100};
  z-index: 10;
  max-width: 600px;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
  }

  p {
    font-size: 1.4rem;
    margin: 0.75rem 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    bottom: 3rem;
    left: 1.5rem;
    max-width: 80%;
    h1 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

export const BannerButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background-color: ${colors.beige500};
  color: ${colors.colorRichBlue};
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.beige100};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
  }
`;
