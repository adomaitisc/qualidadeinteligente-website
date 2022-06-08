import Landing from "./Landing";
import Cards from "./Cards";
// import Info from "./Sections/Info";
// import Testimonials from "./Sections/Testimonials";
// import Form from "./Sections/Form";

import styles from "./Pages.module.css";

export default function Pages() {
  return (
    <div className={styles.pages}>
      <Landing />
      <Cards />
      {/* <Info />
      <Testimonials />
      <Form /> */}
    </div>
  );
}
