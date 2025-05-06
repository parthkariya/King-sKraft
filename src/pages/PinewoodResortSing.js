import React from "react";
import { Footer, Navbar } from "../common";
import { Hero2, PinewoodSingAboutus } from "../components";
import { PinewoodSingFacility } from "../components";
import { PinewoodSingDinning } from "../components";

const PinewoodResortSing = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <Hero2 />
      <PinewoodSingAboutus />
      <PinewoodSingFacility />
      <PinewoodSingDinning />
      <Footer />
    </>
  );
};

export default PinewoodResortSing;
