import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const CategoryCard = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 25rem;
  width: 25rem;
  overflow: hidden;
  cursor: pointer;
  background-color: ${colors.colorRichBlue};
  box-shadow: 0 4px 12px ${colors.grey400};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${colors.black100};
  }
  @media (max-width: 768px) {
    width: 11rem;
      height: 14.5rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 21.875rem;
  object-fit: cover;
  display: block;
  @media (max-width: 768px) {
    height: 12.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.beige100};
  padding: 0.7rem 0.5rem;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 0rem;
    margin: 0rem;
  }
`;
