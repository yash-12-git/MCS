import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

export const DesktopSlider = styled.div`
  display: flex;
  flex:1.8;
  align-items: flex-start;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 35rem;
  gap: 0.2rem 0rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey400};
    border-radius: 0.25rem;
  }
`;

export const Thumbnail = styled.div<{ isActive: boolean }>`
  border: 2px solid
    ${({ isActive }) => (isActive ? colors.colorRichBlue : "transparent")};
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0rem 0rem 0rem 1rem;
  overflow: hidden;
  width: 6rem;
  height:7rem;
  transition: border 0.3s ease;

  img {
    width: 6rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 0.25rem;
    display: block;
  }

  &:hover {
    border-color: ${colors.colorRichBlue};
  }
`;

export const MainImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.accent100};
  margin: 0rem 1rem;
  height: 40rem;
  width: 100%;
  img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
`;

/* 📱 Mobile slider */
export const MobileSlider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;

  .slide {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 18rem;

    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 42%;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? colors.golden500 : colors.beige100};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
