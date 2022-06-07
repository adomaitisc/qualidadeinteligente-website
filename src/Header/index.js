import React from "react";

import { header } from "../Data";

export default function index() {
  return (
    <div className="">
      <ul className="">
        <li className="">{header.items.item1}</li>
        <li className="">{header.items.item2}</li>
        <li className="">{header.items.item3}</li>
      </ul>
    </div>
  );
}
