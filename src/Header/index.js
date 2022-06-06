import React from "react";

import { header } from "../Data";

export default function index() {
  return (
    <div className={header.headerClass}>
      <img src={header.logo.source} alt={header.logo.alt}></img>
      <ul className={header.listClass}>
        <li className={header.listItemClass}>{header.items.item1}</li>
        <li className={header.listItemClass}>{header.items.item2}</li>
        <li className={header.listItemClass}>{header.items.item3}</li>
      </ul>
    </div>
  );
}
