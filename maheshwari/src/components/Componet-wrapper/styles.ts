import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  background-color: ${colors.beige500};
  margin: 1rem 0rem 0rem 0rem;
`;

export const Header = styled.div`
  text-align: center;
  background-color: ${colors.colorRichBlue};
  color: ${colors.beige500};
  padding: 20px 20px;
  margin-bottom: 1.2rem;
  @media (max-width: 768px) {
    padding: 1.5rem 0rem;
    margin-bottom: 0rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding: 0rem;
  margin: 0rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  padding: 0rem;
  margin: 0rem;
  color: ${colors.beige500};
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0rem;
  @media (max-width: 768px) {
    display: none;
    padding: 0rem;
  }
`;

export const ScrollWrapper = styled.div`
  display: none;
  background-color: ${colors.beige500};
  @media (max-width: 768px) {
    margin: 0rem 1rem;
    display: block;
    .scroll-controls {
      display: flex;
      justify-content: flex-end;
      gap: 0.2rem;
    }

    .scroll-container {
      display: flex;
      overflow-x: auto;
      gap: 1rem;
      scroll-behavior: smooth;
      padding-bottom: 1rem;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const ScrollButton = styled.button`
  background-color: ${colors.colorRichBlue};
  color: white;
  border: 2px solid ${colors.beige100};
  position: relative;
  bottom: 1.25rem;
  right: 0.5rem;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
  &:active {
    transform: scale(0.95);
  }
`;