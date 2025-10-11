import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const PageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0rem 1rem;
  flex-direction: row;
  background-color: ${colors.beige100};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0rem 0.5rem;
  p {
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.colorRichBlue};
  }
  @media (max-width: 768px) {
    padding: 0rem 0.5rem;
    p {
      margin: 0.5rem 0rem;
    }
  }
`;

export const MobileActions = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-top: 1px solid ${colors.beige200};
    padding: 0.5rem;
    justify-content: space-around;
    z-index: 999;
  }

  button {
    flex: 1;
    margin: 0 0.5rem;
    padding: 0.6rem 1rem;
    font-weight: 600;
    border-radius: 6px;
    border: 1px solid ${colors.colorRichBlue};
    background: ${colors.beige500};
    cursor: pointer;
  }
`;

export const SheetOverlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MobileSheet = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 80%;
  background: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 1rem;
  overflow-y: auto;
  z-index: 999;
`;
