import Facebook from "../Assets/Facebook";
import Instagram from "../Assets/Instagram";
import LinkedIn from "../Assets/LinkedIn";

import styles from "../../styles/components/Landing.module.css";

const socialUrl = {
  fb: "https://www.facebook.com/qualidadeinteligente",
  ig: "https://www.instagram.com/qualidadeinteligente",
  li: "https://www.linkedin.com/in/qualidadeinteligente",
};

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a href={socialUrl.fb} target="_blank" rel="noreferrer">
          <Facebook className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={socialUrl.ig} target="_blank" rel="noreferrer">
          <Instagram className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={socialUrl.li} target="_blank" rel="noreferrer">
          <LinkedIn className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}

function Text() {
  return (
    <div className={styles.text}>
      <h1>Compromisso com a sua Certificação.</h1>
      <p>Nossa equipe garante o Resultado Positivo da sua Certificação.</p>
    </div>
  );
}

export default function Landing() {
  return (
    <section className={styles.section}>
      <Social />
      <Text />
    </section>
  );
}
