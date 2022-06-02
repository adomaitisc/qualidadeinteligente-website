import React from "react";
import { section_04 as s4 } from "../Data";

function Content() {
  return (
    <div className={s4.contentClass}>
      <h2>{s4.content.title}</h2>
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <div>
        <ul className={s4.testimonialsClass}>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial1.author}</h7>
            <p>{s4.testimonials.testimonial1.role}</p>
            <p>{s4.testimonials.testimonial1.description}</p>
          </li>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial2.author}</h7>
            <p>{s4.testimonials.testimonial2.role}</p>
            <p>{s4.testimonials.testimonial2.description}</p>
          </li>
        </ul>
        <button>{s4.testimonials.button}</button>
      </div>
      <div>
        <ul className={s4.testimonialsClass}>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial3.author}</h7>
            <p>{s4.testimonials.testimonial3.role}</p>
            <p>{s4.testimonials.testimonial3.description}</p>
          </li>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial4.author}</h7>
            <p>{s4.testimonials.testimonial4.role}</p>
            <p>{s4.testimonials.testimonial4.description}</p>
          </li>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial5.author}</h7>
            <p>{s4.testimonials.testimonial5.role}</p>
            <p>{s4.testimonials.testimonial5.description}</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className={s4.testimonialsClass}>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial6.author}</h7>
            <p>{s4.testimonials.testimonial6.role}</p>
            <p>{s4.testimonials.testimonial6.description}</p>
          </li>
          <li className={s4.testimonialsItemClass}>
            <h7>{s4.testimonials.testimonial7.author}</h7>
            <p>{s4.testimonials.testimonial7.role}</p>
            <p>{s4.testimonials.testimonial7.description}</p>
          </li>
        </ul>
        <button>{s4.testimonials.button}</button>
      </div>
    </>
  );
}

export function Section4() {
  return (
    <div className={s4.sectionClass}>
      <Content />
      <Testimonials />
    </div>
  );
}
