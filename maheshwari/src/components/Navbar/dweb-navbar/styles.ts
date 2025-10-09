import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.5rem;
  background-color: ${colors.beige100};
  border-bottom: 1px solid ${colors.grey200};
  position: relative;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 45rem;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 3rem;
  min-width: 19rem;
  background-color: ${colors.white100};
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  border: 1px solid ${colors.grey300};
  border-radius: 0.5rem;
  margin: 0 1rem;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
    color: ${colors.grey500};
  }

  svg {
    color: ${colors.grey500};
    cursor: pointer;
    padding: 0rem 0.4rem;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 3.2rem;
  width: 100%;
  min-width: 15rem;
  background-color: ${colors.white100};
  border: 1px solid ${colors.grey300};
  border-radius: 0.5rem;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  z-index: 9;
  margin: 0 1rem;
  max-height: 15rem;
  overflow-y: auto;
`;

export const DropdownItem = styled.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: ${colors.grey500};

  &:hover {
    background-color: ${colors.beige500};
  }
`;

export const NavUtility = styled.div`
  display: flex;
  align-items: center;
`;

export const UtilityButton = styled.button<{ isBackground?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1.25rem;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  ${({ isBackground }) =>
        isBackground &&
        `
      background-color: ${colors.beige500};
      flex-direction: row;
      justify-content: center;
      border-radius: 0.75rem;
      padding: 0.5rem 0.8rem;
      margin: 0rem 0rem 0rem 2rem
    `}
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
  line-height: 1;
  font-weight: bold;
  background-color: ${colors.colorRichBlue};
  color: ${colors.white100};
`;
