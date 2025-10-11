import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
  min-height: 50vh;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  }
`;

export const ProductCard = styled.div<{ outOfStock?: boolean }>`
  background: ${({ outOfStock }) =>
    outOfStock ? colors.grey100 : colors.beige100};
  position: relative;
  box-shadow: 0px 8px 15px ${colors.grey200};
  opacity: ${({ outOfStock }) => (outOfStock ? 0.6 : 1)};
  padding: 0.5rem;
  border-radius: 8px;
  cursor: ${({ outOfStock }) => (outOfStock ? "none" : "pointer")};

  img {
    width: 100%;
    min-height: 18rem;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    font-size: 1rem;
    margin: 0.5rem 0 0.25rem 0;
    font-weight: 600;
  }

  .badge {
    background-color: ${colors.golden500};
    color: ${colors.black100};
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .out-of-stock {
    position: absolute;
    bottom: 7rem;
    left: 0.8rem;
    background: ${colors.error300};
    color: white;
    padding: 2px 6px;
    font-size: 0.75rem;
    border-radius: 0.25rem;
  };

  @media (max-width: 768px) {
    img {
      width: 100%;
      min-height: 13rem;
      object-fit: cover;
      border-radius: 4px;
    };
    max-height: 5rem;
}
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.25rem;

  .discounted {
    font-weight: 700;
    color: ${colors.black100};
  }

  .original {
    text-decoration: line-through;
    color: ${colors.grey500};
    font-size: 0.85rem;
  }

  .discount {
    color: ${colors.beige100};
    font-size: 0.85rem;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin-left: 0.4rem;
    background-color: ${colors.colorRichBlue};
  }
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: ${colors.grey500};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0.25rem 0 0.5rem 0;
`;
