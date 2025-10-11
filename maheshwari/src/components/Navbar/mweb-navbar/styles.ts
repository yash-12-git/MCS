import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const MobileNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  background-color: ${colors.beige500};
  border-bottom: 1px solid ${colors.grey200};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const MobileLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.4rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
`;

export const MobileUtility = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

/* Sidebar */
export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 90;
`;

export const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: ${colors.white100};
  box-shadow: 2px 0 10px rgba(0,0,0,0.15);
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const SidebarItem = styled.div<{ active: boolean }>`
  padding: 1rem 0;
  font-size: 1.1rem;
  color: ${({ active }) => (active ? colors.black100 : colors.grey500)};
  border-bottom: 1px solid ${colors.grey200};
  cursor: pointer;
   &:hover {
    background-color: ${colors.beige500};
  }
`;

/* Search */
export const SearchWrapper = styled.div`
  position: relative;
  background: ${colors.white100};
  border-bottom: 1px solid ${colors.grey200};
  padding: 0.6rem 1rem;
  z-index: 99;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.grey300};
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  background-color: ${colors.white100};
  color: ${colors.grey500};
`;

export const SearchDropdown = styled.div`
  width: 91%;
  position: absolute;
  background: ${colors.white100};
  border: 1px solid ${colors.grey300};
  border-radius: 0.5rem;
  top: 3.5rem;
  left: 1rem;
  z-index: 12;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const SearchResult = styled.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
    &:hover {
    background-color: ${colors.beige500};
  }
`;
