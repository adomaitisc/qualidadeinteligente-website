import type { NextPage } from "next";
import SEO from "../components/SEO";

//Importing components
import Header from "../components/Header";
import Landing from "../components/Landing";
import Solutions from "../components/Solutions";
import Data from "../components/Data";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO />

      <Header />
      <div className={styles.pages}>
        <Landing />
        <Solutions />
        <Data />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
