import React from "react";
import logo from "../assets/Qualidade.svg";

const headerData = {
  headerClass: "header",
  listClass: "list",
  listItemClass: "list_item",
  logo: {
    source: logo,
    alt: "Qualidade Inteligente",
  },
  items: {
    item1: "Soluções",
    item2: "Quem Somos",
    item3: "Explorar",
  },
};

export default function index() {
  return (
    <div className={headerData.headerClass}>
      <img src={headerData.logo.source} alt={headerData.logo.alt}></img>
      <ul className={headerData.listClass}>
        <li className={headerData.listItemClass}>{headerData.items.item1}</li>
        <li className={headerData.listItemClass}>{headerData.items.item2}</li>
        <li className={headerData.listItemClass}>{headerData.items.item3}</li>
      </ul>
    </div>
  );
}
