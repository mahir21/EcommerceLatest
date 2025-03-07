import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import SecondCarousel from "./SecondCarousel";
import ThirdCarousel from "./ThirdCarousel";
import UpperCarousel from "./UpperCarousel";
import Steps from "./Steps";

const HomePage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <UpperCarousel></UpperCarousel>
      <Steps></Steps>
      <SecondCarousel></SecondCarousel>
      <Hero></Hero>

      <ThirdCarousel></ThirdCarousel>
    </div>
  );
};

export default HomePage;
