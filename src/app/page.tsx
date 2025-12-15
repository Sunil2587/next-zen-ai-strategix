import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamic imports for better code splitting and performance
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-screen" />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen" />,
});
const Industries = dynamic(() => import("@/components/Industries"), {
  loading: () => <div className="min-h-screen" />,
});
const Insights = dynamic(() => import("@/components/Insights"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-screen" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SmoothScroll />
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
