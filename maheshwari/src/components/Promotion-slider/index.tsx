'use client';

import React, { useRef, useEffect } from 'react';
import { SliderWrapper, SliderContent, SliderMessage } from './style';

const messages = [
  'Free shipping on orders over ₹999!',
  'Buy 2 get 1 free on select fabrics!',
  'New arrivals: Premium Suit Fabrics!',
  'Festive Sale: Up to 50% off!',
  'Custom tailoring now available!',
];

export const PromotionSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let position = 0;
    const speed = 2;

    const scroll = () => {
      position += speed;
      if (position >= slider.scrollWidth / 2) {
        position = 0;
      }
      slider.scrollLeft = position;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const allMessages = [...messages, ...messages];

  return (
    <SliderWrapper ref={sliderRef}>
      <SliderContent>
        {allMessages.map((msg, idx) => (
          <SliderMessage key={idx}>{msg}</SliderMessage>
        ))}
      </SliderContent>
    </SliderWrapper>
  );
};
