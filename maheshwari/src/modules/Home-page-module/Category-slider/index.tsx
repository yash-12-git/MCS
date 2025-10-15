"use client";

import Image from "next/image";
import { FabricCard, FabricName } from "./styles";
import ScrollableSection from "@/components/Componet-wrapper";
import { useRouter } from "next/navigation";

const fabrics = [
  { name: "Suits", image: "/coat.jpeg", path: "/product-listing/suits" },
  { name: "Jackets", image: "/jacket.png", path: "/product-listing/jackets"  },
  { name: "Shirts", image: "/shirt.png", path: "/product-listing/shirts" },
  { name: "Trousers", image: "/trouser.png",path: "/product-listing/trousers" },
  { name: "Kurtas", image: "/kurta.jpeg", path: "/product-listing/kurtas" },
  { name: "Blazer", image: "/blazer.jpeg", path: "/product-listing/blazers" },
];

const ShopByProductCategory = () => {
    const router = useRouter();
  return (
    <ScrollableSection
      title="Refine Your Search"
      subtitle="Explore Premium Weaves and Textures."
    >
      {fabrics.map((fabric) => (
        <FabricCard key={fabric.path} onClick={()=> router.push(fabric.path)}>
          <Image
            src={fabric.image}
            alt={fabric.name}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
          <FabricName>{fabric.name}</FabricName>
        </FabricCard>
      ))}
    </ScrollableSection>
  );
};

export default ShopByProductCategory;
