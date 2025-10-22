"use client";

import { usePathname, useRouter } from "next/navigation";
import { TabItem, TabsContainer } from "./styles";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Best Sellers", path: "/product-listing/best-sellers" },
  { label: "Suits & Blazers", path: "/product-listing/suits-blazers" },
  { label: "Jackets", path: "/product-listing/jackets" },
  { label: "Trousers", path: "/product-listing/trousers" },
   { label: "Bandhgala & Jhodpuri", path: "/product-listing/jhodpuri" },
  { label: "Shirts", path: "/product-listing/shirts" },
  { label: "Kurtas", path: "/product-listing/kurtas" },
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
