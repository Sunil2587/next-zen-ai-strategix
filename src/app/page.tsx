import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <CaseStudies />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
