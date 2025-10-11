import React, { useState, useEffect } from "react";
import {
  SortTrigger,
  DropdownMenu,
  DropdownOption,
  MobileSheetContainer,
  SheetHeader,
  MobileSortOption,
} from "./styles";

interface SortOption {
  value: string;
  label: string;
}

const SORT_OPTIONS: SortOption[] = [
  { value: "", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
  { value: "newest", label: "Newest Arrivals" },
];

interface Props {
  sortOption: string;
  setSortOption: (value: string) => void;
  isMobileSheet?: boolean;
  onClose?: () => void;
}

export default function SortBar({
  sortOption,
  setSortOption,
  isMobileSheet,
  onClose,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSortOption(value);
    setIsOpen(false);
    if ( onClose) onClose();
  };

  const currentLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    "Featured";


  if (isMobileSheet) {
    return (
      <MobileSheetContainer>
        <SheetHeader>
          Sort By
        </SheetHeader>
        <div>
          {SORT_OPTIONS.map((option) => (
            <MobileSortOption
              key={option.value}
              $isActive={sortOption === option.value}
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {sortOption === option.value && <span className="check-mark">✓</span>}
            </MobileSortOption>
          ))}
        </div>
      </MobileSheetContainer>
    );
  }

  // ------------------------------------
  // ✅ DESKTOP DROPDOWN MODE
  // ------------------------------------
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <label
        style={{
          marginRight: "0.75rem",
          fontWeight: 500,
          color: "#495057",
        }}
      >
        Sort by:
      </label>
      <div ref={dropdownRef} style={{ position: "relative" }}>
        <SortTrigger onClick={() => setIsOpen(!isOpen)}>
          {currentLabel} <span className="chevron">▼</span>
        </SortTrigger>
        {isOpen && (
          <DropdownMenu>
            {SORT_OPTIONS.map((option) => (
              <DropdownOption
                key={option.value}
                onClick={() => handleSelect(option.value)}
                $isActive={sortOption === option.value}
              >
                {option.label}
              </DropdownOption>
            ))}
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
