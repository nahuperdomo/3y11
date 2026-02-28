import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Experience from "@/components/Experience";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <MenuSection />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
