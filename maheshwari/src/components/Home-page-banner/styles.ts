import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 15rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 8rem;
  left: 3rem;
  color: ${colors.beige100};
  z-index: 10;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    bottom: 8rem;
    left: 6.5rem;
    h1 {
      display: none;
      font-size: 1rem;
      color: ${colors.beige100};
    }
    p {
      font-size: 0.75rem;
      display: none;
    }
  }
`;

export const BannerButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${colors.beige500};
  color: ${colors.colorRichBlue};
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.beige100};
  }
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 1rem;
  }
`;
