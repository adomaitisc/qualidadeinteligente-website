import styles from "../../styles/components/Button.module.css";

export default function Button(props: any) {
  if (props.primary) {
    return (
      <button
        onClick={props.action || ""}
        className={styles.button}
        type={props.type}
      >
        {props.text}
      </button>
    );
  }
  return (
    <button
      onClick={props.action || ""}
      className={styles.link}
      type={props.type}
    >
      {props.text}
    </button>
  );
}
