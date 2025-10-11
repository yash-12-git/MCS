import React, { useState } from "react";
import {
  RBSheetContainer,
  FilterSection,
  FilterTitle,
  FilterPill,
  SheetHeader,
  PriceRangeContainer,
  RangeValues,
  AvailabilityOptions,
  DualRangeHighlight,
  DualRangeTrack,
  DualRangeThumb,
} from "./styles";
import { FilterValues } from "@/types/interface";
import { availablityType } from "@/app/constants";
import { Range } from "react-range";

interface Props {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
  onClose?: () => void;
  onReset?: () => void;
}

interface IFilterConfig {
  type: "color" | "fabric" | "size";
  title: string;
  options: string[];
}

const FILTER_CONFIG = [
  {
    type: "color" as const,
    title: "Color",
    options: ["Black", "Blue", "Grey", "White", "Beige", "Brown"],
  },
  {
    type: "fabric" as const,
    title: "Fabric",
    options: ["Cotton", "Silk", "Wool", "Linen", "Rayon"],
  },
    {
    type: "size" as const,
    title: "Size",
    options: ["S", "M", "L", "XL", "XXL", "3XL"],
  },
];

export default function MobileFilterSheet({
  filters,
  setFilters,
  onClose,
  onReset,
}: Props) {
  const MIN = 0;
  const MAX = 10000;

  const [values, setValues] = useState<number[]>([
    filters.minPrice || MIN,
    filters.maxPrice || MAX,
  ]);

  const handlePriceChange = (vals: number[]) => {
    setValues(vals);
    setFilters({
      ...filters,
      minPrice: vals[0],
      maxPrice: vals[1],
    });
  };

  /** ✅ Only allow keys that are arrays */
  type ArrayFilterKeys = "color" | "size" | "fabric";

  const handleFilterChange = (type: ArrayFilterKeys, value: string) => {
    const updatedFilter = filters[type] === value
      ? null
      : value;      
    setFilters({ ...filters, [type]: updatedFilter });
  };

  const handleAvailabilityChange = (
    value: availablityType.inStock | availablityType.outOfStock
  ) => {
    const updatedAvailability = filters.availability === value ? "" : value;
    setFilters({ ...filters, availability: updatedAvailability });
  };

  return (
    <RBSheetContainer>
      <SheetHeader>
        <h4>Filter Products</h4>
        <button onClick={()=> {
          setValues([MIN, MAX]);
          onReset?.()
        }

        } className="reset-btn">
          Reset
        </button>
      </SheetHeader>

      <div className="filter-content">
        {/* 🟢 Availability */}
        <FilterSection>
          <FilterTitle>Availability</FilterTitle>
          <AvailabilityOptions>
            <FilterPill
              $isActive={filters.availability === availablityType.inStock}
              onClick={() => handleAvailabilityChange(availablityType.inStock)}
            >
              In Stock
            </FilterPill>
            <FilterPill
              $isActive={filters.availability === availablityType.outOfStock}
              onClick={() =>
                handleAvailabilityChange(availablityType.outOfStock)
              }
            >
              Out of Stock
            </FilterPill>
          </AvailabilityOptions>
        </FilterSection>

        {/* 🟢 Price Filter */}
        <FilterSection>
          <FilterTitle>Price Range</FilterTitle>
          <PriceRangeContainer>
            <RangeValues>
              <span>₹{values[0]}</span>
              <span>₹{values[1]}</span>
            </RangeValues>

            <Range
              step={100}
              min={MIN}
              max={MAX}
              values={values}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <DualRangeTrack {...props}>
                  <DualRangeHighlight
                    style={{
                      left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                      width: `${
                        ((values[1] - values[0]) / (MAX - MIN)) * 100
                      }%`,
                    }}
                  />
                  {children}
                </DualRangeTrack>
              )}
              renderThumb={({ props }) => <DualRangeThumb {...props} />}
            />
          </PriceRangeContainer>
        </FilterSection>

        {/* 🟢 Color & Fabric Filters */}
        {FILTER_CONFIG.map((group : IFilterConfig) => (
          <FilterSection key={group.type}>
            <FilterTitle>{group.title}</FilterTitle>
            <div>
              {group.options.map((option) => {
                const isActive =  filters[group.type] === option; 
                return (
                  <FilterPill
                    key={option}
                    $isActive={isActive}
                    onClick={() => handleFilterChange(group.type, option)}
                  >
                    {option}
                  </FilterPill>
                );
              })}
            </div>
          </FilterSection>
        ))}
      </div>
    </RBSheetContainer>
  );
}
