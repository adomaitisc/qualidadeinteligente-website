import React from "react";

import { Landing } from "./Sections/Landing";
import Cards from "./Sections/Cards";
import { Info } from "./Sections/Info";
import { Testimonials } from "./Sections/Testimonials";
import { Form } from "./Sections/Form";

import styles from "./Pages.module.css";

export default function index() {
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
