import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

// ------------------------------------
// Desktop Dropdown Styles
// ------------------------------------

// Button that triggers the dropdown
export const SortTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.colorRichBlue};
  border-radius: 8px;
  background-color: ${colors.beige100};
  color: ${colors.colorRichBlue};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  .chevron {
    font-size: 0.8rem;
    color: ${colors.colorRichBlue};
  }

  &:hover, &:focus {
    box-shadow: 0px 0px 2px 1px ${colors.colorRichBlue};
    outline: none;
  }
`;

// The dropdown menu itself
export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${colors.beige100};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
  padding: 0.5rem 0;
  transform-origin: top;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Individual option within the menu
export const DropdownOption = styled.button<{ $isActive: boolean }>`
  width: 100%;
  display: block;
  padding: 0.75rem 1.25rem;
  text-align: left;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  color: ${(props) => (props.$isActive ? colors.colorRichBlue : colors.black200)};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${colors.beige500};
  }
`;

// ------------------------------------
// Mobile Styles (for RBSheet)
// ------------------------------------

export const MobileSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .options-list {
    flex-grow: 1;
    overflow-y: auto;
  }
`;

export const SheetHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.colorRichBlue};
  font-size: 1.2rem;
`;

export const MobileSortOption = styled.button<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 0.5rem 0rem;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? colors.colorRichBlue : colors.black200)};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  transition: background-color 0.1s;

  &:last-child {
    border-bottom: none;
  }

  &:active {
    background-color: ${colors.beige200};
  }

  .check-mark {
    font-size: 1.2rem;
    color: ${colors.colorRichBlue};
  }
`;