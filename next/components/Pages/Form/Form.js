import { section_05 as s5 } from "../../../Data";
import styles from "../../../styles/components/pages/Form.module.css";

function Text() {
  return (
    <div className={styles.text}>
      <h2>{s5.content.title}</h2>
      <p>{s5.content.description}</p>
      <button>{s5.content.button}</button>
    </div>
  );
}

function mapInputs(object) {
  return Object.keys(object).map((key, index) => (
    <div key={index} id={index}>
      <label htmlFor={object[key].id}>{object[key].label}</label>
      <input type={object[key].type} id={object[key].id} />
    </div>
  ));
}

function Content() {
  return (
    <form className={styles.content}>
      {mapInputs(s5.form.common)}
      <div className={styles.message}>
        <label htmlFor={s5.form.message.id}>{s5.form.message.label}</label>
        <input type={s5.form.message.type} id={s5.form.message.id} />
      </div>
      <div className={styles.button}>
        <button type="submit">{s5.form.button}</button>
      </div>
    </form>
  );
}

export default function Form() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
