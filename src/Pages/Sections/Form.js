import React from "react";

import { section_05 as s5 } from "../../Data";

function Text() {
  <div className={s5.contentClass}>
    <h2>{s5.content.title}</h2>
    <p>{s5.content.description}</p>
    <button>{s5.content.button}</button>
  </div>;
}

function mapInputs(object) {
  return Object.keys(object).map((key, index) => (
    <>
      <label htmlFor={object[key].id}>{object[key].label}</label>
      <input type={object[key].type} id={object[key].id} />
    </>
  ));
}

/* <label htmlFor={s5.form.input1.id}>{s5.form.input1.label}</label>
<input type={s5.form.input1.type} id={s5.form.input1.id} /> */

function Content() {
  return (
    <form className={s5.formClass}>
      {mapInputs(s5.form.common)}
      <label htmlFor={s5.form.message.id}>{s5.form.message.label}</label>
      <input type={s5.form.message.type} id={s5.form.message.id} />
      <button type="submit">{s5.form.button}</button>
    </form>
  );
}

export function Form() {
  return (
    <div className={s5.sectionClass}>
      <Text />
      <Content />
    </div>
  );
}
