"use client";

import { useState } from "react";
import {
  FooterWrapper,
  FooterSection,
  FooterTitle,
  FooterLink,
  LinksGroup,
  AccordionButton,
  AccordionContent,
  ContactInfo,
  FooterBottom,
} from "./styles";
import { ChevronDown, ChevronUp, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <FooterWrapper>
        {/* About Us Section */}
        <FooterSection>
          <AccordionButton onClick={() => toggleSection("about")}>
            <FooterTitle>ABOUT US</FooterTitle>
            <span>
              {openSection === "about" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </AccordionButton>
          <AccordionContent isOpen={openSection === "about"}>
            <LinksGroup>
              <FooterLink href="#">
                The Maheshwari Cloth Stores is an online store of Raymond and
                other Leading Brands Suiting Shirting Fabrics.
              </FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </LinksGroup>
          </AccordionContent>
        </FooterSection>

        {/* My Account Section */}
        <FooterSection>
          <AccordionButton onClick={() => toggleSection("account")}>
            <FooterTitle>MY ACCOUNT</FooterTitle>
            <span>
              {openSection === "account" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </AccordionButton>
          <AccordionContent isOpen={openSection === "account"}>
            <LinksGroup>
              <FooterLink href="#">Shopping Bag</FooterLink>
              <FooterLink href="#">Order History</FooterLink>
              <FooterLink href="#">My Account</FooterLink>
            </LinksGroup>
          </AccordionContent>
        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <AccordionButton onClick={() => toggleSection("contact")}>
            <FooterTitle>GET IN TOUCH</FooterTitle>
            <span>
              {openSection === "contact" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </AccordionButton>
          <AccordionContent isOpen={openSection === "contact"}>
            <ContactInfo>
              <p>
                <MapPin size={18} /> Maheshwari Cloth Stores, Sadar Bazzar,
                Mandsaur - 458001 (MP)
              </p>
              <p>
                <Phone size={18} /> +91 9425369403
              </p>
              <p>
                <Mail size={18} /> support@maheshwaricloth.com
              </p>
            </ContactInfo>
          </AccordionContent>
        </FooterSection>
      </FooterWrapper>
      <FooterBottom>
        <p>
          © {new Date().getFullYear()} Maheshwari Cloth Stores. All Rights
          Reserved.
        </p>
      </FooterBottom>
    </>
  );
};

export default Footer;
