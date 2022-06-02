import React from "react";

import { section_01 as s1 } from "./Data";

function Social() {
  return (
    <ul className={s1.socialClass}>
      <li className={s1.socialItemClass}>
        <a href={s1.social.instagram.url} target="_blank" rel="noreferrer">
          <img src={s1.social.instagram.icon} alt="Instagram" />
        </a>
      </li>
      <li className={s1.socialItemClass}>
        <a href={s1.social.facebook.url} target="_blank" rel="noreferrer">
          <img src={s1.social.facebook.icon} alt="Facebook" />
        </a>
      </li>
      <li className={s1.socialItemClass}>
        <a href={s1.social.linkedin.url} target="_blank" rel="noreferrer">
          <img src={s1.social.linkedin.icon} alt="LinkedIn" />
        </a>
      </li>
    </ul>
  );
}

export function Section1() {
  return (
    <>
      <Social />
    </>
  );
}
