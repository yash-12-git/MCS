import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const RBSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 1rem;
  .filter-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 0rem 1rem;
  }
  @media (min-width: 768px) {
    max-width: 20rem;
    border-right: 1px solid ${colors.beige200};
  }
`;

export const SheetHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0rem 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    color: ${colors.colorRichBlue};
  }

  .reset-btn {
    background: none;
    border: none;
    color: ${colors.colorRichBlue};
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 0rem;
`;

export const FilterTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.colorRichBlue};
`;

export const FilterPill = styled.button<{ $isActive: boolean }>`
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.$isActive ? colors.colorRichBlue : colors.beige100};
  color: ${(props) =>
    props.$isActive ? colors.beige200 : colors.colorRichBlue};
  font-weight: ${(props) => (props.$isActive ? "600" : "500")};

  &:active {
    background-color: ${(props) =>
      props.$isActive ? colors.primary500 : colors.beige200};
  }
`;

export const AvailabilityOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${colors.colorRichBlue};
`;

export const DualRangeTrack = styled.div`
  position: relative;
  height: 6px;
  width: 100%;
  background-color: ${colors.beige400};
  border-radius: 4px;
`;

export const DualRangeHighlight = styled.div`
  position: absolute;
  height: 6px;
  top: 0;
  background-color: ${colors.colorRichBlue};
  border-radius: 4px;
`;

export const DualRangeThumb = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: ${colors.colorRichBlue};
  box-shadow: 0 0 0 2px white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
