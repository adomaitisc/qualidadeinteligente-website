import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

//Importing components
import Header from "../components/Header";
import Landing from "../components/Landing";
import Solutions from "../components/Solutions";
import Data from "../components/Data";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Qualidade Inteligente | Compromisso com a sua Certificação
        </title>
        <meta
          name="keywords"
          content="ISO 9001, ISO 45001, ISO 14001, Segurança do Trabalho, Qualidade, Certificação, Auditorias, PBQP-H, NBR 15.575, Normas Ambientais"
          key="keywords"
        />
        <meta
          name="description"
          content="Preparamos uma Consultoria Personalizada, adaptada a gestão da sua empresa. Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada e desburocratizada."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" key="icon" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Qualidade Inteligente | Compromisso com a sua Certificação"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://qualidadeinteligente-website.vercel.app"
          key="og:url"
        />
        <meta property="og:image" content="/thumbnail.jpeg" key="og:image" />
        <meta
          property="og:description"
          content="Preparamos uma Consultoria Personalizada, adaptada a gestão da sua empresa. Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada e desburocratizada."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" key="twitter:card" />
        <meta
          property="twitter:title"
          content="Qualidade Inteligente | Compromisso com a sua Certificação"
          key="twitter:title"
        />
        <meta
          name="twitter:image"
          content="/thumbnail.jpeg"
          key="twitter:image"
        />
        <meta
          property="twitter:description"
          content="Preparamos uma Consultoria Personalizada, adaptada a gestão da sua empresa. Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada e desburocratizada."
          key="twitter:description"
        />
      </Head>

      <Header />
      <Landing />
      <Solutions />
      <Data />
    </div>
  );
};

export default Home;
