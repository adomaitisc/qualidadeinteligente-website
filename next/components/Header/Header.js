import { header } from "../../Data";
import Qualidade from "../../assets/Qualidade";
import styles from "../../styles/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Qualidade className={styles.icon} />
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>{header.items.item1}</li>
          <li className={styles.item}>{header.items.item2}</li>
          <li className={styles.item}>{header.items.item3}</li>
        </ul>
      </div>
    </div>
  );
}
