import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const SliderWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: ${colors.colorRichBlue};
  padding: 1rem 0;
  margin: 2rem 0;        
`;

export const SliderContent = styled.div`
  display: inline-flex;
  align-items: center;
  min-width: 200%;
`;

export const SliderItem = styled.a`
  display: inline-block;
  margin: 0 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid ${colors.caution200};
  padding: 0.5rem 0.5rem;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  }
`;
