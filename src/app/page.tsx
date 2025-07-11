import Topbar from "@/components/layouts/Topbar";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/layouts/Stats";
import Bottom from "@/components/sections/Bottom";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Footer />
      <Bottom />
    </div>
  );
};

export default Home;
