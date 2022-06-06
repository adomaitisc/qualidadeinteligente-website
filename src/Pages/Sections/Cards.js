import React from "react";
import { section_02 as s2 } from "../../Data";

function Text() {
  return (
    <div className={s2.contentClass}>
      <h1>{s2.content.title}</h1>
      <p>{s2.content.description}</p>
      <button>{s2.content.button}</button>
    </div>
  );
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
    <>
      <div>
        <ul className={s2.cardsClass}>{mapCards(s2.cards.col1)}</ul>
        <button>{s2.cards.button}</button>
      </div>
      <div>
        <ul className={s2.cardsClass}>{mapCards(s2.cards.col2)}</ul>
      </div>
    </>
  );
}

export function Cards() {
  return (
    <div className={s2.sectionClass}>
      <Text />
      <Content />
    </div>
  );
}
