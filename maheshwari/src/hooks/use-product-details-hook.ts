import { IProductListing } from "@/types/interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useProductDetailsHook = ()=> {
      const { slug } = useParams();
  const [productDetail, setProductDetail] = useState<IProductListing | undefined>(undefined);
  const [loading, setLoading] = useState(true);

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
  }, [slug ]);

    return {
        productDetail,
        loading
    }
}

export default useProductDetailsHook;