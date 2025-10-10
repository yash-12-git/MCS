import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const SliderWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: ${colors.colorRichBlue};
  padding: 0.5rem 0;
  margin: 1rem 0;
  @media (min-width: 768px) {
    padding: 1rem 0;
    margin: 2rem 0;
  }
`;

export const SliderContent = styled.div`
  display: inline-flex;
  align-items: center;
  min-width: 200%;
`;

export const SliderItem = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0.2rem 0.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${colors.beige100};
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    margin: 0 0.75rem;
    padding: 0.5rem 0.5rem;
  }

  img {
    width: 90px;
    height: 40px;
    object-fit: contain;

    /* For larger screens */
    @media (min-width: 768px) {
      width: 120px;
      height: 50px;
    }
  }
`;
