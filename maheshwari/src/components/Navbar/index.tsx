import dynamic from 'next/dynamic';
import DwebNavBar from './dweb-navbar';
import styled from '@emotion/styled';

const MobileNavBar = dynamic(() => import('@/components/Navbar/mweb-navbar'), { ssr: false });

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
