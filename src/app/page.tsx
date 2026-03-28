"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Calendar } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="La Costa"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      title="Experience Authentic Mexican Flavors"
      description="At La Costa, we bring the heart of Mexico to your plate with traditional recipes, fresh ingredients, and a warm, inviting atmosphere for the whole family."
      kpis={[
        {
          value: "15+",
          label: "Years Served",
        },
        {
          value: "50+",
          label: "Secret Recipes",
        },
        {
          value: "100%",
          label: "Fresh Ingredients",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-traditional-tamales-composition_23-2149009510.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Passion for Tradition"
      description="Founded with a love for Mexican heritage, La Costa serves authentic recipes passed down through generations. From our handmade tortillas to our signature salsas, every bite is a celebration of authentic flavors."
      imageSrc="http://img.b2bpic.net/free-photo/healthy-food-marble-background_23-2148224141.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Street Taco Platter",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/sombrero-mexican-dishes-near-paper-card_23-2147740721.jpg",
        },
        {
          id: "2",
          name: "Cheese Enchiladas",
          price: "$16.50",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-meal-with-tacos_23-2148764341.jpg",
        },
        {
          id: "3",
          name: "Grande Burrito",
          price: "$13.95",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sliced-shaurma-tasty-meat-salad-sandwich-grey-surface-burger-sandwich-bread-pita-meat_140725-102085.jpg",
        },
      ]}
      title="Our Signature Dishes"
      description="Explore our curated selection of Mexican classics, made fresh to order using the finest local produce and authentic spices."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Incredible Service",
          quote: "The most authentic tacos I've had in the city. The atmosphere is just perfect.",
          name: "Maria G.",
          role: "Foodie",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006704.jpg?_wi=1",
        },
        {
          id: "2",
          title: "A Family Favorite",
          quote: "We come here every weekend. The kids love the enchiladas and I love the salsa!",
          name: "John D.",
          role: "Regular Guest",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-holding-spanish-tortilla_23-2150168086.jpg",
        },
        {
          id: "3",
          title: "Hidden Gem",
          quote: "Such a warm and welcoming place with amazing authentic flavors. Highly recommended.",
          name: "Elena R.",
          role: "Visitor",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-harvesting-orange-trees_23-2148980179.jpg",
        },
        {
          id: "4",
          title: "Authentic Cuisine",
          quote: "Finally, real Mexican food that isn't watered down. Absolutely delicious.",
          name: "Carlos M.",
          role: "Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-photo-beautiful-lady-sitting-restaurant-smiling-camera_114579-92383.jpg",
        },
        {
          id: "5",
          title: "Unforgettable Taste",
          quote: "A truly special spot. Every dish is seasoned perfectly, reflecting genuine Mexican traditions.",
          name: "Sofia L.",
          role: "Food Critic",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006704.jpg?_wi=2",
        },
      ]}
      title="Loved by Our Guests"
      description="Don't just take our word for it—hear what our community says about their experience at La Costa."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you accept reservations?",
          content: "Yes, we highly recommend booking in advance for weekend dinners.",
        },
        {
          id: "f2",
          title: "Do you offer vegan options?",
          content: "Yes, we have several delicious vegan-friendly dishes on our menu.",
        },
        {
          id: "f3",
          title: "Is there parking available?",
          content: "Yes, we have a private parking lot available for all guests.",
        },
      ]}
      ctaTitle="Ready to Visit Us?"
      ctaDescription="Join us today for an authentic culinary experience. Have questions? See our FAQs below."
      ctaButton={{
        text: "Book a Table",
      }}
      ctaIcon={Calendar}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="La Costa"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 La Costa Mexican Restaurant",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
