import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.8rem 1rem;
  background-color: ${colors.beige500};
  border-bottom: 1px solid ${colors.black100};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const TabItem = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ active }) => (active ? colors.black100 : colors.grey500)};
  border-bottom: ${({ active }) => (active ? `2px solid ${colors.black100}` : '2px solid transparent')};
  padding: 0.4rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.black500};
  }
`;