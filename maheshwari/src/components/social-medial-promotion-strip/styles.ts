import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const StripContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.colorRichBlue};
  color: ${colors.beige500};
  padding: 0.8rem 1rem;
  margin: 1rem 2.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const StripText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
