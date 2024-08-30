"use client"

import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import IndustrySlider from "./components/IndustrySlider";
import Testimonials from "./components/Testimonials";
import WhyOrigo from "./components/WhyOrigo";

export default function Home() {
  return (
    <>
    <Hero/>
    <Expertise/>
    <IndustrySlider/>
    <WhyOrigo/>
    <Testimonials/>
    </>
  );
}
