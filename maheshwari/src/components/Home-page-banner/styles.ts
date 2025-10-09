import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 12rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: ${colors.beige500};
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
    h1 {
      font-size: 0.75rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

export const BannerButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${colors.colorRichBlue};
  color: ${colors.beige500};
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: ${colors.primary500};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 1rem;
  }
`;
