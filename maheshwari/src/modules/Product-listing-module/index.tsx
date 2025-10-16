"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import FilterSidebar from "@/components/Filter-bar";
import SortBar from "@/components/Sort-bar";
import PromotionSlider from "@/components/Promotion-slider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  PageContainer,
  MobileActions,
  SheetOverlay,
  MobileSheet,
  ProductListingContainer,
} from "./styles";
import ProductList from "./Product-grid";
import useProductListingHook from "@/hooks/use-product-listing-hook";

export default function ProductListingModule() {
  const {
        isMobile,
        filters,
        setFilters,
        onFilterReset,
        getTagline,
        sortOption,
        setSortOption,
        products,
        loading,
        setFilterSheetVisible,
        setSortSheetVisible,
        filterSheetVisible,
        sortSheetVisible,
        categoryName
    } = useProductListingHook();
  return (
    <>
      <PromotionSlider />
      <NavBar />

      <PageContainer>
        {!isMobile && (
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            onReset={onFilterReset}
          />
        )}

        <div style={{ flex: 1 }}>
          <ProductListingContainer>
            <p>{getTagline(categoryName)}</p>

            {!isMobile && (
              <SortBar
                sortOption={sortOption}
                setSortOption={setSortOption}
                isMobileSheet={isMobile}
              />
            )}
          </ProductListingContainer>
          <ProductList products={products}  isLoading={loading}/>
        </div>
      </PageContainer>

      {isMobile && (
        <MobileActions>
          <button onClick={() => setFilterSheetVisible(true)}>Filter</button>
          <button onClick={() => setSortSheetVisible(true)}>Sort</button>
        </MobileActions>
      )}

      <SheetOverlay
        visible={filterSheetVisible || sortSheetVisible}
        onClick={() => {
          setFilterSheetVisible(false);
          setSortSheetVisible(false);
        }}
      />

      <MobileSheet visible={filterSheetVisible}>
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onReset={onFilterReset}
        />
      </MobileSheet>

      <MobileSheet visible={sortSheetVisible}>
        <SortBar
          sortOption={sortOption}
          setSortOption={setSortOption}
          onClose={() => setSortSheetVisible(false)}
          isMobileSheet={isMobile}
        />
      </MobileSheet>

      <Footer />
    </>
  );
}
