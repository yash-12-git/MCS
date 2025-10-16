import { useState } from "react";
import { IProductListing } from "@/types/interface";
import {
  InfoContainer,
  ColorSwatch,
  SizeButton,
  AddToCartButton,
  PriceContainer,
  PriceText,
  MRPText,
  DiscountText,
  AccordionHeader,
  AccordionContent,
} from "./product-info-styles";

const ProductInfoSection = ({
  productData,
}: {
  productData?: IProductListing;
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    productData?.color?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    productData?.sizes?.[0] || null
  );
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!productData) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }
    console.log("Added to cart:", {
      ...productData,
      selectedColor,
      selectedSize,
    });
  };

  const {
    material = "",
    work = [],
    materialCare = "",
    disclaimer = "",
  } = productData?.productDetails || {};

  return (
    <InfoContainer>
      {/* Product Name */}
      <h1>{productData.name}</h1>

      {/* 💰 Price Section */}
      <PriceContainer>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <PriceText>
            ₹{productData.discountedPrice || productData.price}
          </PriceText>
          {productData.discountedPrice && (
            <>
              <MRPText>₹{productData.price}</MRPText>
              {productData.discountPercent && (
                <DiscountText>{productData.discountPercent}% OFF</DiscountText>
              )}
            </>
          )}
        </div>

        {/* Add to Cart Button below price */}
        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </PriceContainer>

      {/* Available Colors */}
      <section>
        <h3>Available Colors</h3>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          {productData.color?.map((color) => (
            <ColorSwatch
              key={color}
              bg={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </section>

      {/* Available Sizes */}
      <section>
        <h3>Available Sizes</h3>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          {productData.sizes?.map((size) => (
            <SizeButton
              key={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </div>
      </section>

      {/* Accordion: Product Details */}
      <AccordionHeader onClick={() => toggleSection("details")}>
        <h3>Product Details</h3>
        <span>{openSection === "details" ? "−" : "+"}</span>
      </AccordionHeader>
      {openSection === "details" && (
        <AccordionContent>
          <ul style={{ lineHeight: "1.6" }}>
            <li>
              <strong>Color:</strong>{" "}
              {selectedColor || productData.color.join(", ")}
            </li>
            {material && (
              <li>
                <strong>Material:</strong> {material}
              </li>
            )}
            {work?.length > 0 && (
              <li>
                <strong>Work:</strong> {work?.join(", ")}
              </li>
            )}
            <li>
              <strong>Description:</strong> {productData.description}
            </li>
            {disclaimer && (
              <li>
                <strong>Disclaimer:</strong> {disclaimer}
              </li>
            )}
            {materialCare && (
              <li>
                <strong>Wash Care:</strong> {materialCare}
              </li>
            )}
          </ul>
        </AccordionContent>
      )}

      {/* Accordion: Shipping & Returns */}
      <AccordionHeader onClick={() => toggleSection("shipping")}>
        <h3>Shipping & Returns</h3>
        <span>{openSection === "shipping" ? "−" : "+"}</span>
      </AccordionHeader>
      {openSection === "shipping" && (
        <AccordionContent>
          <ul>
            <li>Free shipping on orders above ₹999.</li>
            <li>7-day easy return or exchange policy.</li>
            <li>
              Report defective, or damaged items within 24 hours of delivery.
            </li>
            <li>
              For frequent returns, a shipment fee of up to ₹100 may apply and
              will be adjusted against your refund.
            </li>
          </ul>
        </AccordionContent>
      )}
    </InfoContainer>
  );
};

export default ProductInfoSection;
