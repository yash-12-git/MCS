import { colors } from "@/constants/colors";
import styled from "@emotion/styled";

export const FabricCard = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 23rem;
  height: 15rem;
  overflow: hidden;
  cursor: pointer;
  border-radius:0.65rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 15px ${colors.grey500};
  }
  @media (max-width: 768px) {
    width: 9.7rem;
    height: 12rem;
  }
`;

export const FabricName = styled.span`
  position: absolute;
  bottom: 0rem;
  left: 0;
  right: 0;
  text-align: center;
  color: ${colors.beige200};
  font-weight: 600;
  font-size: 1.5rem;
  text-shadow: 0px 10px 15px ${colors.grey500};
  color: ${colors.beige500};
  background-color: ${colors.colorRichBlue};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
