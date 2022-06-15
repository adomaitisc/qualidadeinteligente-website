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
          Compromisso com a sua Certificação! | Qualidade Inteligente
        </title>
        <meta
          name="description"
          content="Preparamos uma Consultoria Personalizada, adaptada a gestão da sua empresa.Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada e desburocratizada."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Landing />
      <Solutions />
      <Data />
    </div>
  );
};

export default Home;
