"use client";

import { usePathname, useRouter } from "next/navigation";
import { TabItem, TabsContainer } from "./styles";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Best Sellers", path: "/best-sellers" },
  { label: "Suits", path: "/suits" },
  { label: "Jackets", path: "/jackets" },
  { label: "Trousers", path: "/trouser" },
   { label: "Blazers", path: "/combos" },
  { label: "Shirts", path: "/shirting" },
  { label: "Ethnic Wear", path: "/ethnic-wear" },
];

const HeaderTabs = () => {
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
