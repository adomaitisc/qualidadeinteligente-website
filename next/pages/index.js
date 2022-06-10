import Head from "next/head";
import Header from "../components/Header";
import Pages from "../components/Pages";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
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
      <Pages />
      <Footer />
    </div>
  );
}
