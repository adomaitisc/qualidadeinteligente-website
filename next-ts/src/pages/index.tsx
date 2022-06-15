import type { NextPage } from "next";
import SEO from "../components/SEO";

//Importing components
import Header from "../components/Header";
import Landing from "../components/Landing";
import Solutions from "../components/Solutions";
import Data from "../components/Data";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO />

      <Header />
      <Landing />
      <Solutions />
      <Data />
    </div>
  );
};

export default Home;
