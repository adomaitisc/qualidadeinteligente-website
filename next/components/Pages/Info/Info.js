import { section_03 as s3 } from "../../../Data";
import styles from "../../../styles/components/Info.module.css";

function Text() {
  return (
    <div className={styles.text}>
      <h5>{s3.content.subTitle}</h5>
      <h2>{s3.content.title}</h2>
      <div>
        <p>
          {s3.content.description.d1}
          <br />
          <br />
          {s3.content.description.d2}
        </p>
        <button>{s3.content.button}</button>
      </div>
    </div>
  );
}

function mapInfo(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index} id={index}>
      <h6>{object[key].subTitle}</h6>
      <h1>{object[key].title}</h1>
      <p>{object[key].description}</p>
    </li>
  ));
}

function Content() {
  return (
    <>
      <ul className={styles.content}>{mapInfo(s3.info)}</ul>
    </>
  );
}

export default function Info() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
