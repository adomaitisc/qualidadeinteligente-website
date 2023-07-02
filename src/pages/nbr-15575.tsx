import type { NextPage } from "next";

import Background from "../components/Background";
import Contact from "../components/Contact";
import NBR from "../components/NBR";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Pros from "../components/Pros";

const ISO9001: NextPage = () => {
  return (
    <>
      <Background items={3} />
      <SEO
        pageTitle="NBR 15.575 | Qualidade Inteligente"
        pageDescription="melhora a qualidade das habitações em consonância com o Código de Defesa do Consumidor."
      />

      <Header />

      <main className="mx-auto flex flex-col items-center gap-y-24 p-4 overflow-hidden">
        <NBR />
        <Pros />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ISO9001;
