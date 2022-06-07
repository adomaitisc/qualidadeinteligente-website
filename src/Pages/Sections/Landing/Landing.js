import React from "react";

import { section_01 as s1 } from "../../../Data";

function mapSocial(object) {
  return Object.keys(object).map((key, index) => (
    <li key={key}>
      <a href={object[key].href} target="_blank" rel="noreferrer">
        <img src={object[key].source} alt={object[key].alt} />
      </a>
    </li>
  ));
}

function Social() {
  return <ul className="">{mapSocial(s1.social)}</ul>;
}

function Text() {
  return (
    <div className="">
      <h1>{s1.content.title}</h1>
      <p>{s1.content.description}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="">
      <Social />
      <Text />
    </div>
  );
}
