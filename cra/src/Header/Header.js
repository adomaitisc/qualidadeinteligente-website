import React from "react";

import { header } from "../Data";
import { ReactComponent as Logo } from "../assets/Qualidade.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo className={styles.icon} />
      <ul className={styles.list}>
        <li className={styles.item}>{header.items.item1}</li>
        <li className={styles.item}>{header.items.item2}</li>
        <li className={styles.item}>{header.items.item3}</li>
      </ul>
    </div>
  );
}
