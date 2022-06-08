import Landing from "./Landing";
import Cards from "./Cards";
import Info from "./Info";
import Testimonials from "./Testimonials";
import Form from "./Form";

import styles from "../../styles/components/Pages.module.css";

export default function Pages() {
  return (
    <div className={styles.pages}>
      <Landing />
      <Cards />
      <Info />
      <Testimonials />
      <Form />
    </div>
  );
}
