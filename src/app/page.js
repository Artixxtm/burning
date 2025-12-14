import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
