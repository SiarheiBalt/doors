import Hero from "../components/HomePage/Hero";
import StyleSplit from "../components/HomePage/StyleSplit";
import WhyUs from "../components/HomePage/WhyUs";
import Projects from "../components/HomePage/Projects";
import Process from "../components/HomePage/Process";
import FinalCta from "../components/HomePage/FinalCta";
import HomeMap from "../components/HomePage/HomeMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <Hero />
      <StyleSplit />
      <WhyUs />
      <Projects />
      <Process />
      <FinalCta />
      <HomeMap />
    </div>
  );
}
