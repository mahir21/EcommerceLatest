import Hero from "@/components/Home/Hero";
import Navigation from "@/components/Home/Navigation";
import SecondCarousel from "@/components/Home/SecondCarousel";
import Steps from "@/components/Home/Steps";
import UpperCarousel from "@/components/Home/UpperCarousel";
import React from "react";

const home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <UpperCarousel></UpperCarousel>
      <Steps></Steps>

      <SecondCarousel></SecondCarousel>

      <Hero></Hero>
    </div>
  );
};

export default home;
