'use client'

import ProductImageSlider from "@/components/Product-details-image-slider";
import { Container } from "./styles";
import { colors } from "@/constants/colors";

const ProductDetailsDescriptionComponet = () => {
     const images = ['/wool.png', '/silk.png', '/linen.png', '/coat.jpeg'];
    return (
            <Container>
             <ProductImageSlider images={images}/>
             <div style={{ flex:1}}>Hello</div>
            </Container>
    )
}

export default ProductDetailsDescriptionComponet;