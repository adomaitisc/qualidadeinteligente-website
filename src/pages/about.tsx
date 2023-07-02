import type { NextPage } from "next";

import Background from "../components/Background";
import Contact from "../components/Contact";
import DNA from "../components/DNA";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Work from "../components/Work";

const AboutPage: NextPage = () => {
  return (
    <>
      <Background items={4} />
      <SEO
        pageTitle="Sobre Nós | Qualidade Inteligente"
        pageDescription="Somos uma empresa com uma metodologia diferenciada, proporcionando Sistemas de Gestão completamente adaptados aos nossos clientes."
      />

      <Header />

      <main className="mx-auto flex flex-col items-center gap-y-24 p-4 overflow-hidden">
        <Work />
        <DNA />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
