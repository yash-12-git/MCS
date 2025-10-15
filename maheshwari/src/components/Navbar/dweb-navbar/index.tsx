'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, User, Heart } from 'lucide-react';
import {
  NavBar as StyledNavBar,
  NavUtility,
  UtilityButton,
  CartCount,
  SearchBar,
  Dropdown,
  DropdownItem,
  SearchBarWrapper,
} from './styles';
import HeaderTabs from '../header-tabs';
import { sampleResults } from '@/mock-data/search-results-data';
import { useRouter } from 'next/navigation';

const DwebNavBar = () => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredResults = sampleResults.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
    <StyledNavBar>
        <Image
          src="/mcs-logo.png"
          alt="Maheshwari Cloth Store Logo"
          width={100}
          height={90}
          onClick={()=> router.push("/")}
        />
      <SearchBarWrapper ref={wrapperRef}>
        <SearchBar>
          <Search size={30} />
          <input
            type="text"
            placeholder="Search fabrics, designs, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
          />
        </SearchBar>

        {focused && query && (
          <Dropdown>
            {filteredResults.map((result, i) => (
              <DropdownItem key={i} onClick={() => setQuery(result)}>
                {result}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
        {
          query && focused && filteredResults.length === 0 && (
            <Dropdown>
              <DropdownItem>No results found !!!</DropdownItem>
            </Dropdown>
          )
        }
      </SearchBarWrapper>

      <NavUtility>
        <UtilityButton aria-label="faviroute" isBackground><Heart size={22} /></UtilityButton>
        <UtilityButton aria-label="Account" isBackground><User size={22} /><div>Login / Register</div></UtilityButton>
        <UtilityButton aria-label="Shopping Bag" isBackground>
          <ShoppingBag size={25} />
          <CartCount>3</CartCount>
        </UtilityButton>
      </NavUtility>
    </StyledNavBar>
    <HeaderTabs/>
    </>

  );
};

export default DwebNavBar;
