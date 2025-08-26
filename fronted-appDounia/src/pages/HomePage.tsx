import React from "react";
import BannerSection from "../components/Home/BannerSection";
import CategorySection from "../components/Home/CategorySection";
import BenefitsSection from "../components/Home/BenefitsSection";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import FooterSection from "../components/Home/FooterSection";




const HomePage: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <CategorySection />
      <BenefitsSection />
      <BestSellingProducts />
      <FooterSection />

    </div>
  );
};

export default HomePage;
