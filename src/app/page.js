import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import CaringMarketingSection from "./Components/CaringMarketingSection";
import FooterDesignSection from "./Components/FooterDesignSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FooterDesignSection/>
        < CaringMarketingSection />
        
      </main>
      
     <Footer />
    </div>
  );
}
