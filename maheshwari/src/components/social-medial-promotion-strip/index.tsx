import { colors } from "@/constants/colors";
import { StripContainer, StripText } from "./styles";
import { Instagram } from "lucide-react";

const SocialMediaPromotionStrip = () => {
      const handleRedirect = () => {
    window.open(
      "https://www.instagram.com/maheshwari.cloth.stores?igsh=MTg3aW00NWhibm9wYw==",
      "_blank"
    );
  };
  return (
    <StripContainer onClick={handleRedirect}>
      <StripText>Follow Us On Our Instagram For Some Exclusive Content!</StripText>
      <Instagram size={25} color={colors.beige500} />
    </StripContainer>
  )};

  export default SocialMediaPromotionStrip;