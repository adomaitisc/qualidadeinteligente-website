import { section_01 as s1 } from "../../../Data";
import Facebook from "../../../assets/Facebook";
import Instagram from "../../../assets/Instagram";
import LinkedIn from "../../../assets/LinkeDin";

import styles from "../../../styles/components/pages/Landing.module.css";

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a href={s1.social.facebook.href} target="_blank" rel="noreferrer">
          <Facebook className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={s1.social.instagram.href} target="_blank" rel="noreferrer">
          <Instagram className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={s1.social.linkedin.href} target="_blank" rel="noreferrer">
          <LinkedIn className={styles.icon} />
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
