import React from "react";

import { Landing } from "./Sections/Landing";
import { Cards } from "./Sections/Cards";
import { Info } from "./Sections/Info";
import { Testimonials } from "./Sections/Testimonials";
import { Form } from "./Sections/Form";

export default function index() {
  return (
    <>
      <Landing />
      <Cards />
      <Info />
      <Testimonials />
      <Form />
    </>
  );
}
