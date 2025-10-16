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
  QuantityContainer,
  QuantityButton,
  QuantityValue,
  AddToCartContainer,
} from "./styles";
import { Share } from "lucide-react";

const ProductInfoSection = ({
  productData,
  loadingProductDetails
}: {
  productData?: IProductListing;
  loadingProductDetails: boolean;
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    productData?.color?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    productData?.sizes?.[0] || null
  );
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!productData) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productData.name,
        text: `Check out this product: ${productData.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

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
      <section>
        <h3>Pricing</h3>
        <PriceContainer>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <MRPText>₹{productData.price}</MRPText>

            {productData.discountedPrice && (
              <>
                <PriceText>
                  ₹{productData.discountedPrice || productData.price}
                </PriceText>
                {productData.discountPercent && (
                  <DiscountText>
                    {productData.discountPercent}% OFF
                  </DiscountText>
                )}
              </>
            )}
          </div>
        </PriceContainer>
      </section>

      {/* Quantity Selector */}
      <section>
        <h3>Quantity</h3>
        <AddToCartContainer>
          <QuantityContainer>
            <QuantityButton onClick={decreaseQuantity}>−</QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
          </QuantityContainer>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
        </AddToCartContainer>
      </section>

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
            <li>Free shipping on orders above ₹1499.</li>
            <li>7-day easy return or exchange policy.</li>
            <li>
              Report defective or damaged items within 24 hours of delivery.
            </li>
            <li>
              For frequent returns, a shipment fee of up to ₹100 may apply and
              will be adjusted against your refund.
            </li>
          </ul>
        </AccordionContent>
      )}
      <Share onClick={handleShare} size={25} />
    </InfoContainer>
  );
};

export default ProductInfoSection;
