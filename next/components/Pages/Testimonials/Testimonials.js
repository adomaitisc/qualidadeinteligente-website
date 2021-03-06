import { section_04 as s4 } from "../../../Data";
import styles from "../../../styles/components/Testimonials.module.css";

function Text() {
  return (
    <div className={styles.text}>
      <h2>{s4.content.title}</h2>
    </div>
  );
}

function mapTestimonials(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index} className={index === 0 ? styles.li0 : ""}>
      <h6>{object[key].author}</h6>
      <p id="role">{object[key].role}</p>
      <p>{object[key].description}</p>
    </li>
  ));
}

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>{mapTestimonials(s4.col1)}</ul>
        <div className={styles.buttonArea}>
          <button>{s4.button}</button>
        </div>
      </div>
      <div>
        <ul className={styles.list}>{mapTestimonials(s4.col2)}</ul>
      </div>
      <div className={styles.last}>
        <ul className={styles.list}>{mapTestimonials(s4.col3)}</ul>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
