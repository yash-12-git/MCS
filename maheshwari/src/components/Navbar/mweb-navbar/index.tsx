"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, ShoppingBag, Search, X } from "lucide-react";
import {
  MobileNavContainer,
  MobileLogoWrapper,
  IconButton,
  MobileUtility,
  SidebarOverlay,
  SidebarMenu,
  SidebarItem,
  SearchWrapper,
  SearchInput,
  SearchDropdown,
  SearchResult,
} from "./styles";
import { usePathname, useRouter } from "next/navigation";
import { sampleResults } from "@/mock-data/search-results-data";

const MobileNavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

  const tabs = [
  { label: "Home", path: "/" },
  { label: "Best Sellers", path: "/product-listing/best-sellers" },
  { label: "Suits", path: "/product-listing/suits" },
  { label: "Jackets", path: "/product-listing/jackets" },
  { label: "Trousers", path: "/product-listing/trousers" },
   { label: "Blazers", path: "/product-listing/blazers" },
  { label: "Shirts", path: "/product-listing/shirts" },
  { label: "Kurtas", path: "/product-listing/kurtas" },
];

  const filteredResults = sampleResults.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <MobileNavContainer>
        <IconButton onClick={() => setSidebarOpen(true)} aria-label="Open Menu">
          <Menu size={26} />
        </IconButton>

        <MobileLogoWrapper>
          <Image
            src="/mcs-logo.png"
            alt="Maheshwari Cloth Store Logo"
            width={80}
            height={70}
            onClick={()=> router.push("/")}
          />
        </MobileLogoWrapper>

        <MobileUtility>
          <IconButton
            onClick={() => setSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            {isSearchOpen ? <X size={22} /> : <Search size={22} />}
          </IconButton>
          <IconButton aria-label="Cart">
            <ShoppingBag size={22} />
          </IconButton>
        </MobileUtility>
      </MobileNavContainer>

      {isSearchOpen && (
        <SearchWrapper ref={wrapperRef}>
          <SearchInput
            type="text"
            placeholder="Search fabrics, designs, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <SearchDropdown>
              {filteredResults.length > 0 ? (
                filteredResults.map((result, i) => (
                  <SearchResult key={i}>{result}</SearchResult>
                ))
              ) : (
                <SearchResult>No results found</SearchResult>
              )}
            </SearchDropdown>
          )}
        </SearchWrapper>
      )}

      {isSidebarOpen && (
        <>
          <SidebarOverlay onClick={() => setSidebarOpen(false)} />
              <SidebarMenu>
            {
              tabs.map((tab)=> (
                <SidebarItem key={tab.path} active={pathname === tab.path}
          onClick={() => router.push(tab.path)}>
                  {tab.label}
                </SidebarItem>
              ))
            }

            </SidebarMenu>
        </>
      )}
    </>
  );
};

export default MobileNavBar;
