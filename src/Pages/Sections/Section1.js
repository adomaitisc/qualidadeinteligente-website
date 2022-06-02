import React from "react";

import { section_01 as s1 } from "../Data";

function Social() {
  return (
    <ul className={s1.socialClass}>
      <li className={s1.socialItemClass}>
        <a href={s1.social.facebook.url} target="_blank" rel="noreferrer">
          <img src={s1.social.facebook.icon} alt={s1.social.facebook.alt} />
        </a>
      </li>
      <li className={s1.socialItemClass}>
        <a href={s1.social.instagram.url} target="_blank" rel="noreferrer">
          <img src={s1.social.instagram.icon} alt={s1.social.instagram.alt} />
        </a>
      </li>
      <li className={s1.socialItemClass}>
        <a href={s1.social.linkedin.url} target="_blank" rel="noreferrer">
          <img src={s1.social.linkedin.icon} alt={s1.social.linkedin.alt} />
        </a>
      </li>
    </ul>
  );
}

function Content() {
  return (
    <div className={s1.contentClass}>
      <h1>{s1.content.title}</h1>
      <p>{s1.content.description}</p>
    </div>
  );
}

export function Section1() {
  return (
    <div className={s1.sectionClass}>
      <Social />
      <Content />
    </div>
  );
}
