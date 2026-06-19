import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Decorations from "../components/Decorations";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";




const Home = () => {
  return (
    <main className="bg-[#050505] min-h-screen text-white relative overflow-hidden">

      <Decorations />

      <div className="max-w-[1450px] mx-auto px-5">

        <Navbar />

        <div
          className="
          mt-8
          border
          border-white/10
          rounded-[32px]
          bg-[#070707]
          overflow-hidden
          "
        >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />     
        <Contact />
        <Footer />

        </div>

      </div>

    </main>
  );
};

export default Home;