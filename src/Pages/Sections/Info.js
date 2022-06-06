import React from "react";

import { section_03 as s3 } from "../../Data";

function Text() {
  return (
    <div className={s3.contentClass}>
      <h5>{s3.content.subTitle}</h5>
      <h2>{s3.content.title}</h2>
      <p>{s3.content.description}</p>
      <button>{s3.content.button}</button>
    </div>
  );
}

function mapInfo(object) {
  return Object.keys(object).map((key, index) => (
    <li key={index} className={s3.infoItemClass}>
      <h6>{object[key].subTitle}</h6>
      <h1>{object[key].title}</h1>
      <p>{object[key].description}</p>
    </li>
  ));
}

function Content() {
  return (
    <>
      <ul className={s3.infoClass}>{mapInfo(s3.info)}</ul>
    </>
  );
}

export function Info() {
  return (
    <div className={s3.sectionClass}>
      <Text />
      <Content />
    </div>
  );
}
