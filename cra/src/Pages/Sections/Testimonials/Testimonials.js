import React from "react";
import { section_04 as s4 } from "../../../Data";

function Text() {
  return (
    <div className="">
      <h2>{s4.content.title}</h2>
    </div>
  );
}

function mapTestimonials(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index}>
      <h6>{object[key].author}</h6>
      <p>{object[key].role}</p>
      <p>{object[key].description}</p>
    </li>
  ));
}

function Content() {
  return (
    <>
      <div>
        <ul className="">{mapTestimonials(s4.col1)}</ul>
        <button>{s4.button}</button>
      </div>
      <div>
        <ul className="">{mapTestimonials(s4.col2)}</ul>
      </div>
      <div>
        <ul className="">{mapTestimonials(s4.col3)}</ul>
      </div>
    </>
  );
}

export default function Testimonials() {
  return (
    <div className="">
      <Text />
      <Content />
    </div>
  );
}
