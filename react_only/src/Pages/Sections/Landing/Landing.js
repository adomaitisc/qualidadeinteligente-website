import React from "react";

import { section_01 as s1 } from "../../../Data";
import { ReactComponent as Fb } from "../../../assets/Facebook.svg";
import { ReactComponent as Ig } from "../../../assets/Instagram.svg";
import { ReactComponent as Li } from "../../../assets/LinkedIn.svg";

import styles from "./Landing.module.css";

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a href={s1.social.facebook.href} target="_blank" rel="noreferrer">
          <Fb className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={s1.social.instagram.href} target="_blank" rel="noreferrer">
          <Ig className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={s1.social.linkedin.href} target="_blank" rel="noreferrer">
          <Li className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}

function Text() {
  return (
    <div className={styles.text}>
      <h1>{s1.content.title}</h1>
      <p>{s1.content.description}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <div className={styles.section}>
      <Social />
      <Text />
    </div>
  );
}
