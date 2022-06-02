import React from "react";
import { section_02 as s2 } from "../Data";

function Content() {
  return (
    <div className={s2.contentClass}>
      <h1>{s2.content.title}</h1>
      <p>{s2.content.description}</p>
      <button>{s2.content.button}</button>
    </div>
  );
}

function Cards() {
  return (
    <ul className={s2.cardsClass}>
      <li className={s2.cardsItemClass}>
        <h4>{s2.cards.card1.title}</h4>
        <p>{s2.cards.card1.description}</p>
      </li>
      <li className={s2.cardsItemClass}>
        <h4>{s2.cards.card2.title}</h4>
        <p>{s2.cards.card2.description}</p>
      </li>
      <li className={s2.cardsButtonClass}>
        <button>{s2.cards.button}</button>
      </li>
      <li className={s2.cardsItemClass}>
        <h4>{s2.cards.card3.title}</h4>
        <p>{s2.cards.card3.description}</p>
      </li>
      <li className={s2.cardsItemClass}>
        <h4>{s2.cards.card4.title}</h4>
        <p>{s2.cards.card4.description}</p>
      </li>
      <li className={s2.cardsItemClass}>
        <h4>{s2.cards.card5.title}</h4>
        <p>{s2.cards.card5.description}</p>
      </li>
    </ul>
  );
}

export function Section2() {
  return (
    <div className={s2.sectionClass}>
      <Content />
      <Cards />
    </div>
  );
}
