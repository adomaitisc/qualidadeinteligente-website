import styles from "../../styles/components/Contact.module.css";

import Button from "../Button";

function Text() {
  return (
    <div className={styles.text}>
      <h2>Fale com a gente!</h2>
      <p>
        Escreva-nos uma mensagem e entraremos em contato o mais breve possível.
      </p>
      <button>Ou solicite uma proposta e tire dúvidas via WhatsApp!</button>
    </div>
  );
}

const inputs = {
  common: [
    ["Empresa", "company", "text"],
    ["Email", "email"],
    ["Nome Completo", "full_name", "text"],
    ["Telefone", "telefone", "text"],
  ],
  select: [
    [
      "Número de Funcionários",
      "funcionarios",
      "select",
      ["5 - 20", "até 50", "50 ou mais", "100 ou próximo"],
    ],
    [
      "Qual a sua Necessidade?",
      "necessidade",
      "select",
      [
        "Auditorias Internas",
        "PBQP-H e a NBR 15.575",
        "ISO 14.001",
        "ISO 45.001",
        "ISO 9.001",
        "Outra (não listada)",
      ],
    ],
  ],
  message: ["Escreva sua Mensagem", "mensagem", "text"],
};

function mapCommonInputs(array: any) {
  return array.map((item: any, index: number) => (
    <div key={index} id={`c${index}`}>
      <label htmlFor={item[1]}>{item[0]}</label>
      <input type={item[2]} id={item[1]} />
    </div>
  ));
}

function mapSelectInputs(array: any) {
  return array.map((item: any, index: number) => (
    <div key={index} id={`s${index}`}>
      <label htmlFor={item[1]}>{item[0]}</label>
      <select name={item[1]}>
        <option value="" selected disabled hidden>
          Selecione →
        </option>
        {item[3].map((option: any, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ));
}

function Content() {
  return (
    <form className={styles.content}>
      {mapCommonInputs(inputs.common)}
      {mapSelectInputs(inputs.select)}
      <div className={styles.message}>
        <label htmlFor={inputs.message[1]}>{inputs.message[0]}</label>
        <textarea name={inputs.message[1]} id={inputs.message[1]} />
      </div>
      <div className={styles.button}>
        <Button
          primary
          type="submit"
          onClick={() => console.log("submit")}
          text="Enviar Mensagem → "
        />
      </div>
    </form>
  );
}

export default function Form() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
