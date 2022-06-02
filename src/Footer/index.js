import React from "react";

import logo from "../assets/Qualidade.svg";
import fb from "../assets/Facebook.svg";
import ig from "../assets/Instagram.svg";
import li from "../assets/LinkedIn.svg";

const footerData = {
  container1: {
    containerClass: "c1",
    title: "Compromisso com a sua Certificação.",
    logo: {
      source: logo,
      alt: "Qualidade Inteligente",
    },
  },
  container2: {
    containerClass: "c2",
    title: "Acompanhe-nos nas Redes Sociais",
    social: {
      facebook: {
        source: "https://www.facebook.com/qualiadeinteligente",
        alt: "Facebook",
      },
      instagram: {
        source: "https://www.instagram.com/qualidadeinteligente",
        alt: "Instagram",
      },
      linkedin: {
        source: "https://www.linkedin.com/company/qualiadeinteligente",
        alt: "LinkedIn",
      },
    },
  },
  container3: {
    containerClass: "c3",
    ctaClass: "c3_cta",
    title: "Explorar",
    explore: ["Home", "Soluções", "Sobre Nós", "Recomendações"],
    cta: "Contate a QI → ",
  },
  container4: {
    containerClass: "c4",
    title: "Soluções",
    solution: [
      "Auditorias Internas",
      "PBQP-H e a NBR 15.575",
      "ISO 45.001",
      "ISO 14.001",
      "ISO 9.001",
    ],
  },
  copyright:
    "Copyright - 2022 - Qualidade Inteligente - Todos os direitos reservados",
  credit: {
    text: "Desenvolvido por ",
    highlight: "Cauã Adomaitis",
    source: "https://adomaitisc.com",
  },
};

function Stamp() {
  return (
    <div className={footerData.container1.containerClass}>
      <img
        src={footerData.container1.logo.source}
        alt={footerData.container1.logo.alt}
      ></img>
      <p>{footerData.container1.title}</p>
    </div>
  );
}

function Social() {
  return (
    <div className={footerData.container2.containerClass}>
      <p>Acompanhe-nos nas Redes Sociais</p>
      <ul>
        <li>
          <a
            href={footerData.container2.social.facebook.source}
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt={footerData.container2.social.facebook.alt}></img>
          </a>
        </li>
        <li>
          <a
            href={footerData.container2.social.instagram.source}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ig}
              alt={footerData.container2.social.instagram.alt}
            ></img>
          </a>
        </li>
        <li>
          <a
            href={footerData.container2.social.linkedin.source}
            target="_blank"
            rel="noreferrer"
          >
            <img src={li} alt={footerData.container2.social.linkedin.alt}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

function Explore() {
  return (
    <div className="container3">
      <h6>{footerData.container3.title}</h6>
      {footerData.container3.explore.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <p className={footerData.container3.ctaClass}>
        {footerData.container3.containerClass.cta}
      </p>
    </div>
  );
}

function Solutions() {
  return (
    <div className={footerData.container4.containerClass}>
      <h6>{footerData.container4.title}</h6>
      {footerData.container4.solution.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default function index() {
  return (
    <div className="footer">
      <Stamp />
      <Social />
      <Explore />
      <Solutions />
    </div>
  );
}
