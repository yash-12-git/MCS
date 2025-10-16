import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: ${colors.beige100};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${colors.black100};
  padding:0rem 4rem;
  h1 {
    font-size: 2rem;
    padding: 0rem;
    margin: 0rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  section {
    padding-top: 0rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h1 {
      font-size: 1.5rem;
      padding: 0rem;
      margin: 1rem 0rem 0rem 0rem;
      font-weight: 600;
    }
  }
`;

export const ColorSwatch = styled.div<{ bg: string; selected?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  border: ${({ selected }) =>
    selected ? `2px solid ${colors.black100}` : `1px solid ${colors.grey500}`};
  cursor: pointer;
`;

export const SizeButton = styled.button<{ selected?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ selected }) =>
    selected ? colors.colorRichBlue : colors.white100};
  color: ${({ selected }) => (selected ? colors.white100 : colors.black100)};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const AddToCartButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${colors.colorRichBlue};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (min-width: 768px) {
  max-width: 10rem;
  padding: 0.8rem 0.5rem;
  }
  &:hover {
    background-color: ${colors.black400};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.75rem;
`;

export const PriceText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.colorRichBlue};
`;

export const MRPText = styled.span`
  font-size: 1rem;
  color: ${colors.grey500};
  text-decoration: line-through;
`;

export const DiscountText = styled.span`
  font-size: 0.8rem;
  color: ${colors.colorRichBlue};
  font-weight: 600;
  background-color: ${colors.colorRichBlue};
  color: ${colors.white100};
  padding: 0.3rem;
  border-radius: 0.5rem;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${colors.grey200};

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.black300};
  }
`;

export const AccordionContent = styled.div`
  padding: 0rem 0 1rem 0;
  animation: slideDown 0.3s ease forwards;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ul {
    padding-left: 1rem;
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
  }
`;
