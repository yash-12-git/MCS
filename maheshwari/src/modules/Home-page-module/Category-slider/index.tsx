"use client";

import {
  CardImage,
  CardTitle,
  CategoryCard,
} from "./styles";
import ScrollableSection from "@/components/Componet-wrapper";
import { useRouter } from "next/navigation";

const fabrics = [
  { name: "Suits & Blazers", image: "/coat.jpeg", path: "/product-listing/suits-blazers" },
  { name: "Jackets", image: "/jacket.png", path: "/product-listing/jackets" },
  { name: "Shirts", image: "/shirt.png", path: "/product-listing/shirts" },
  {
    name: "Trousers",
    image: "/trouser.png",
    path: "/product-listing/trousers",
  },
  { name: "Kurtas & Pyjamas", image: "/kurta.jpeg", path: "/product-listing/kurtas" },
  { name: "Bandhgala & Jodhpuri", image: "/blazer.jpeg", path: "/product-listing/jhodpuri" },
];

const ShopByProductCategory = () => {
  const router = useRouter();
  return (
    <ScrollableSection
      title="Shop Our Collections"
      subtitle="Explore Premium Weaves and Textures."
    >
      {fabrics.map((fabric) => (
        <CategoryCard key={fabric.name} onClick={()=> router.push(fabric.path)}>
          <CardImage src={fabric.image} alt={fabric.name} />
          <CardTitle>{fabric.name}</CardTitle>
        </CategoryCard>
      ))}
      </ScrollableSection>
  );
};

export default ShopByProductCategory;
