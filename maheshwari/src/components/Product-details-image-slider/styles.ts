import styled from "@emotion/styled";
import { colors } from "@/constants/colors";

/* 🖥️ Desktop layout */
export const DesktopSlider = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey400};
    border-radius: 4px;
  }
`;

export const Thumbnail = styled.div<{ isActive: boolean }>`
  border: 2px solid ${({ isActive }) => (isActive ? colors.colorRichBlue : "transparent")};
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: border 0.3s ease;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
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

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? colors.colorRichBlue : colors.grey400};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
