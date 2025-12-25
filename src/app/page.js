import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
