import type { NextPage } from "next";

import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <Header />
      <main className="flex flex-col items-center justify-center p-8 overflow-hidden">
        <Hero />
        <Testimonials />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
