import { FilterValues, IProductListing } from "@/types/interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useProductListingHook = ()=> {
     const { category } = useParams();
      const [products, setProducts] = useState<IProductListing[]>([]);
      const [sortOption, setSortOption] = useState("");
      const [loading, setLoading] = useState(true);
    
      const defaultFilterValues: FilterValues = {
        color: null,
        size: null,
        fabric: null,
        availability: "",
        minPrice: 0,
        maxPrice: 10000,
      };
    
      const [filters, setFilters] = useState<FilterValues>(defaultFilterValues);
      const [filterSheetVisible, setFilterSheetVisible] = useState(false);
      const [sortSheetVisible, setSortSheetVisible] = useState(false);
    
      const onFilterReset = () => {
        setFilters(defaultFilterValues);
      };
    
      const categoryName = (category as string)?.replace("-", " ") || "Products";
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            setLoading(true);
            const query = new URLSearchParams({
              category: (category as string) || "",
              color: filters.color || "",
              size: filters.size || "",
              fabric: filters.fabric || "",
              availability: filters.availability || "",
              minPrice: String(filters.minPrice),
              maxPrice: String(filters.maxPrice),
              sort: sortOption || "",
            });
    
            const res = await fetch(`/api/products?${query.toString()}`);
    
            if (!res.ok) {
              throw new Error("Failed to fetch products");
            }
            const data = await res.json();
            setProducts(data.products);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, [category, filters, sortOption]);
    
      const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    
      const getTagline = (cat: string) => {
        switch (cat?.toLowerCase()) {
          case "suits":
            return "Explore premium tailored suits for every occasion.";
          case "shirts":
            return "Find your perfect shirt — classic, casual, or modern.";
          case "ethnic-wear":
            return "Celebrate traditions in style with our ethnic collection.";
          default:
            return "Discover our finest collection curated just for you.";
        }
      };
    return {
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
    }
}

export default useProductListingHook;