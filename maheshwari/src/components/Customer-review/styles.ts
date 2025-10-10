import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const ReviewsSection = styled.section`
  padding: 1rem 1rem;
  background-color: ${colors.beige500};
  text-align: center;
  margin: 1.25rem 1rem 1rem 1rem;
  padding: 0.1rem 1.5rem 1rem 1.5rem;
  @media (max-width: 768px) {
   margin: 1.25rem 0rem 1rem 0rem;
    padding: 0.1rem 1.25rem 1rem 1.25rem;
  }
`;

export const ReviewsTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  padding: 0rem 0rem 1rem 0rem;
  margin: 0rem;
  color: ${colors.colorRichBlue};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ReviewCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px ${colors.grey400};
  padding: 1rem;
  text-align: left;
  scroll-snap-align: start;
  flex: 0 0 85%;
  @media (min-width: 768px) {
    flex: unset;
  }
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1rem;
    padding: 0rem;
    font-weight: 600;
  }
`;

export const Rating = styled.div`
  color: #ffb400;
`;

export const ReviewText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  margin: 0rem;
  padding: 0rem;
`;
