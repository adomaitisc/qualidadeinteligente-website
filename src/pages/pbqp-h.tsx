import type { NextPage } from "next";

import Background from "../components/Background";
import Contact from "../components/Contact";
import PBQPH from "../components/PBQPH";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Pros from "../components/Pros";

const ISO9001: NextPage = () => {
  return (
    <>
      <Background items={3} color="green" />
      <SEO
        pageTitle="ISO 9001 | Qualidade Inteligente"
        pageDescription="Empresas do ramo da Construção Civil que pretendem utilizar algum financiamento federal, tem como requisito, obter esta certificaçāo."
      />

      <Header />

      <main className="mx-auto flex flex-col items-center gap-y-24 p-4 overflow-hidden">
        <PBQPH />
        <Pros />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ISO9001;
