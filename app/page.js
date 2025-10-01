import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import FeaturedProperties from "./components/FeaturedProperties";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Properties />
      <FeaturedProperties />
      <HowItWorks />
      <WhyUs />
    </>
  );
}
