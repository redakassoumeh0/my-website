import CTA from "@/components/CTA";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skill";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import React from "react";

const MainPage = () => {
  return (
    <>
      <CTA />
      <About />
      <Stats />
      <Services />
      <Skills />
      <Contact />
    </>
  );
};

export default MainPage;
