import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Procurement from "@/components/Procurement";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SmoothScroll />
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Procurement />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
