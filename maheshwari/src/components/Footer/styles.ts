import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

export const FooterWrapper = styled.footer`
  background-color: ${colors.colorRichBlue};
  color: ${colors.beige500};
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = styled.a`
  color: ${colors.beige400};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.beige200};
  }
`;

export const ContactInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${colors.beige500};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  svg {
    margin-right: 0.4rem;
    vertical-align: middle;
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.beige500};
  background-color: ${colors.colorRichBlue};
  border-top: 0.5px solid ${colors.beige500};
  padding: 0.2rem 0;
`;

/* Accordion for Mobile */
export const AccordionButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (min-width: 769px) {
    cursor: default;
    span {
      display: none;
    }
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
  @media (min-width: 769px) {
    max-height: none;
  }
`;
