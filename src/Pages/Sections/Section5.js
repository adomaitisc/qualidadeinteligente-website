import React from "react";

import { section_05 as s5 } from "../Data";

function Content() {
  <div className={s5.contentClass}>
    <h2>{s5.content.title}</h2>
    <p>{s5.content.description}</p>
    <button>{s5.content.button}</button>
  </div>;
}

function Form() {
  return (
    <form className={s5.formClass}>
      <label for={s5.form.input1.id}>{s5.form.input1.label}</label>
      <input type={s5.form.input1.type} id={s5.form.input1.id} />
      <label for={s5.form.input2.id}>{s5.form.input2.label}</label>
      <input type={s5.form.input2.type} id={s5.form.input2.id} />
      <label for={s5.form.input3.id}>{s5.form.input3.label}</label>
      <input type={s5.form.input3.type} id={s5.form.input3.id} />
      <label for={s5.form.input4.id}>{s5.form.input4.label}</label>
      <input type={s5.form.input4.type} id={s5.form.input4.id} />
      <label for={s5.form.input5.id}>{s5.form.input5.label}</label>
      <input type={s5.form.input5.type} id={s5.form.input5.id} />
      <label for={s5.form.input6.id}>{s5.form.input6.label}</label>
      <input type={s5.form.input6.type} id={s5.form.input6.id} />
      <label for={s5.form.input7.id}>{s5.form.input7.label}</label>
      <input type={s5.form.input7.type} id={s5.form.input7.id} />
      <button type="submit">{s5.form.button}</button>
    </form>
  );
}

export function Section5() {
  return (
    <div className={s5.sectionClass}>
      <Content />
      <Form />
    </div>
  );
}
