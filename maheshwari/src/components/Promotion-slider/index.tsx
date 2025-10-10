'use client';

import React, { useRef, useEffect } from 'react';
import { SliderWrapper, SliderContent, SliderMessage } from './style';

const messages = [
  'Enjoy free shipping on orders above ₹1499!',
  'Get an extra 5% off on prepaid orders!',
  'Discover our latest premium arrivals!',
  'Festive Sale: Save up to 50% on select styles!',
  'Shop worry-free with 7-day easy returns & exchanges!',
];


const PromotionSlider = () => {
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

export default PromotionSlider;