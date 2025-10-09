'use client';

import { usePathname, useRouter } from 'next/navigation';
import { TabItem, TabsContainer } from './styles';

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'Best Sellers', path: '/best-sellers' },
  { label: 'Suiting', path: '/suiting' },
  { label: 'Shirting', path: '/shirting' },
  { label: 'Combos', path: '/combos' },
  { label: 'Ethnic Wear', path: '/ethnic-wear' },
  { label: 'Suits', path: '/suits' },
  { label: 'Gift Packs', path: '/gift-packs' },
  { label: 'Jackets', path: '/jackets' },

];

export const HeaderTabs = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab.path}
          active={pathname === tab.path}
          onClick={() => router.push(tab.path)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default HeaderTabs;