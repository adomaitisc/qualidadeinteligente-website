import { section_02 as s2 } from "../../../Data";
import styles from "../../../styles/components/Cards.module.css";

function Text() {
  return (
    <div className={styles.text}>
      <h1>{s2.content.title}</h1>
      <p>
        {s2.content.description.d1}
        <br />
        <br />
        {s2.content.description.d2}
      </p>
      <button>{s2.content.button}</button>
    </div>
  );
}

function mapCardsCol1(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index}>
      <h6>{object[key].title}</h6>
      <p>
        {object[key].description.d1}
        <br />
        <br />
        {object[key].description.d2}
        <br />
        {object[key].description.d3}
      </p>
    </li>
  ));
}

function mapCards(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index}>
      <h6>{object[key].title}</h6>
      <p>{object[key].description}</p>
    </li>
  ));
}

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.firstWrapper}>
        <ul className={styles.list}>{mapCardsCol1(s2.cards.col1)}</ul>
        <button>{s2.cards.button}</button>
      </div>
      <div className={styles.secondWrapper}>
        <ul className={styles.list}>{mapCards(s2.cards.col2)}</ul>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}

export default Cards;
