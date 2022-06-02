import React from "react";

import { section_03 as s3 } from "../Data";

function Content() {
  return (
    <div className={s3.contentClass}>
      <h5>{s3.content.subTitle}</h5>
      <h2>{s3.content.title}</h2>
      <p>{s3.content.description}</p>
      <button>{s3.content.button}</button>
    </div>
  );
}

function Info() {
  return (
    <>
      <ul className={s3.infoClass}>
        <li className={s3.infoItemClass}>
          <h6>{s3.info.info1.subTitle}</h6>
          <h1>{s3.info.info1.title}</h1>
          <p>{s3.info.info1.description}</p>
        </li>
        <li className={s3.infoItemClass}>
          <h6>{s3.info.info2.subTitle}</h6>
          <h1>{s3.info.info2.title}</h1>
          <p>{s3.info.info2.description}</p>
        </li>
        <li className={s3.infoItemClass}>
          <h6>{s3.info.info3.subTitle}</h6>
          <h1>{s3.info.info3.title}</h1>
          <p>{s3.info.info3.description}</p>
        </li>
      </ul>
    </>
  );
}

export function Section3() {
  return (
    <div className={s3.sectionClass}>
      <Content />
      <Info />
    </div>
  );
}
