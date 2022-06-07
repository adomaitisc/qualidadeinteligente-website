import React from "react";

import { footer } from "../Data";

function Stamp() {
  return (
    <div className="">
      <img
        src={footer.container1.logo.source}
        alt={footer.container1.logo.alt}
      ></img>
      <p>{footer.container1.title}</p>
    </div>
  );
}

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
  return (
    <div className="">
      <p>Acompanhe-nos nas Redes Sociais</p>
      <ul>{mapSocial(footer.container2.social)}</ul>
    </div>
  );
}

function Explore() {
  return (
    <div className="">
      <h6>{footer.container3.title}</h6>
      {footer.container3.explore.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <p className="">{footer.container3.cta}</p>
    </div>
  );
}

function Solutions() {
  return (
    <div className="">
      <h6>{footer.container4.title}</h6>
      {footer.container4.solution.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default function index() {
  return (
    <div className="">
      <Stamp />
      <Social />
      <Explore />
      <Solutions />
    </div>
  );
}
