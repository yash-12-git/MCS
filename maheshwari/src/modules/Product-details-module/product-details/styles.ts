import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 1rem 0rem;
  background-color: ${colors.beige100};
  @media (max-width: 768px) {
    padding: 0rem;
    flex-direction: column;
  }
`;
