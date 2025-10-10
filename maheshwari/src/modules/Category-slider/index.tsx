"use client";

import Image from "next/image";
import { FabricCard, FabricName } from "./styles";
import ScrollableSection from "@/components/Componet-wrapper";

const fabrics = [
  { name: "Suits", image: "/coat.jpeg" },
  { name: "Jackets", image: "/jacket.png" },
  { name: "Shirts", image: "/shirt.png" },
  { name: "Trousers", image: "/trouser.png" },
  { name: "Kurtas", image: "/kurta.jpeg" },
  { name: "Blazer", image: "/blazer.jpeg" },
];

const ShopByProductCategory = () => {
  return (
    <ScrollableSection
      title="Refine Your Search"
      subtitle="Explore Premium Weaves and Textures."
    >
      {fabrics.map((fabric) => (
        <FabricCard key={fabric.name}>
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
