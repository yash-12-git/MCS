'use client';

import { useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SectionWrapper,
  Header,
  Title,
  Subtitle,
  CardsWrapper,
  ScrollWrapper,
  ScrollButton,
} from './styles';

interface ScrollableSectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ScrollableSection({ title, subtitle, children }: ScrollableSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>

      {/* Desktop View */}
      <CardsWrapper className="desktop-grid">{children}</CardsWrapper>

      {/* Mobile Scrollable View */}
      <ScrollWrapper className="mobile-scroll">
        <div className="scroll-controls">
          <ScrollButton onClick={() => scroll('left')}>
            <ChevronLeft size={20} />
          </ScrollButton>
          <ScrollButton onClick={() => scroll('right')}>
            <ChevronRight size={20} />
          </ScrollButton>
        </div>

        <div className="scroll-container" ref={scrollRef}>
          {children}
        </div>
      </ScrollWrapper>
    </SectionWrapper>
  );
}
