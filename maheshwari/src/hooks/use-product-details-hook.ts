import { IProductListing } from "@/types/interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useProductDetailsHook = () => {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState<
    IProductListing | undefined
  >(undefined);
  const [similarProductDetail, setSimilarProductDetail] = useState<
    IProductListing[] | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);
  const [loadingSimilarProducts, setLoadingSimilarProducts] = useState(true);

  useEffect(() => {
    const fetchSimilarProductDeatils = async () => {
      try {
        setLoadingSimilarProducts(true);
        const query = new URLSearchParams({
          slug: (slug as string) || "",
        });

        const res = await fetch(`/api/similar-products?${query.toString()}`);

        if (!res.ok) {
          throw new Error("Failed to fetch similar products");
        }
        const data = await res.json();
        setSimilarProductDetail(data.product);
      } finally {
        setLoadingSimilarProducts(false);
      }
    };

    fetchSimilarProductDeatils();
  }, [slug]);

  useEffect(() => {
    const fetchProductDeatils = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams({
          slug: (slug as string) || "",
        });

        const res = await fetch(`/api/product-details?${query.toString()}`);

        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await res.json();
        setProductDetail(data.product);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDeatils();
  }, [slug]);

  return {
    productDetail,
    loading,
    loadingSimilarProducts,
    similarProductDetail,
  };
};

export default useProductDetailsHook;
