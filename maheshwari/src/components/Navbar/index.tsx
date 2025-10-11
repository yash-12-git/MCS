"use client";

import DwebNavBar from './dweb-navbar';
import styled from '@emotion/styled';
import MobileNavBar from './mweb-navbar';

const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function NavBar() {
  return (
    <>
      <DesktopWrapper>
        <DwebNavBar />
      </DesktopWrapper>
      <MobileWrapper>
        <MobileNavBar />
      </MobileWrapper>
    </>
  );
}
