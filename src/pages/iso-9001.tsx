import type { NextPage } from "next";

import Background from "../components/Background";
import Contact from "../components/Contact";
import ISO from "../components/ISO";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Pros from "../components/Pros";

const ISO9001: NextPage = () => {
  return (
    <>
      <Background items={3} color="yellow" />
      <SEO
        pageTitle="ISO 9001 | Qualidade Inteligente"
        pageDescription="Certifique-se ISO 9001 com a QI. Certificaçāo realizada juntamente com PBQP-H nível A."
      />

      <Header />

      <main className="mx-auto flex flex-col items-center gap-y-24 p-4 overflow-hidden">
        <ISO />
        <Pros />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ISO9001;
