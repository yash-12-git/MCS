'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Menu, ShoppingBag, Search, X } from 'lucide-react';
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
} from './styles';

const MobileNavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const sampleResults = [
    'Silk Fabric',
    'Cotton Linen',
    'Velvet Brocade',
    'Designer Saree',
    'Kurta Fabric',
    'Suiting Material',
    'Rayon Prints',
  ];

  const filteredResults = sampleResults.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          />
        </MobileLogoWrapper>

        <MobileUtility>
          <IconButton onClick={() => setSearchOpen(!isSearchOpen)} aria-label="Search">
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
            <SidebarItem>Home</SidebarItem>
            <SidebarItem>New Arrivals</SidebarItem>
            <SidebarItem>Fabric Types</SidebarItem>
            <SidebarItem>Designers</SidebarItem>
            <SidebarItem>Sale</SidebarItem>
          </SidebarMenu>
        </>
      )}
    </>
  );
};

export default MobileNavBar;
