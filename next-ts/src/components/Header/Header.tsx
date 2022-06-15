import Qualidade from "../Assets/Qualidade";
import styles from "../../styles/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Qualidade className={styles.icon} />
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>Soluções</li>
          <li className={styles.item}>Quem Somos</li>
          <li className={styles.item}>Explorar</li>
        </ul>
      </div>
    </div>
  );
}
