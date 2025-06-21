"use client"

import Hero from "../components/Hero";
import Features from "../components/Features";
import ColorSelector from "../components/colorSelector";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta"
import AnimatedSection from "@/components/AnimatedSection"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page load
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Hero />
      <AnimatedSection>
      <Features />
      </AnimatedSection>
       <AnimatedSection>
      <ColorSelector />
      </AnimatedSection>
       <AnimatedSection>
      <Cta />
      </AnimatedSection>
      <AnimatedSection>
      <Contact />
      </AnimatedSection>
    </>
  );
}
