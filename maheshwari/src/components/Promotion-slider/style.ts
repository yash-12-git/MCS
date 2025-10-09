import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const SliderWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background: ${colors.colorRichBlue};
  padding: 8px 0px;
  position: relative;
`;

export const SliderContent = styled.div`
  display: inline-block;
  min-width: 200%;
`;

export const SliderMessage = styled.span`
  display: inline-block;
  margin: 0 32px;
  font-weight: bold;
  color: ${colors.caution200};
  font-size: 1rem;
`;
