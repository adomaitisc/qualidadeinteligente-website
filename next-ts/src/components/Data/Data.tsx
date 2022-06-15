import styles from "../../styles/components/Data.module.css";

function Text() {
  return (
    <div className={styles.text}>
      <h5>Um pouco sobre a</h5>
      <h2>Qualidade Inteligente</h2>
      <div>
        <p>
          Somos uma empresa com uma metodologia diferenciada, proporcionando
          Sistemas de Gestão completamente adaptados aos seus clientes.
          <br />
          <br />
          Reduzimos consideravelmente os prazos de implantação para as
          certificações, tornando esse processo bem simplificado.
        </p>
        <button>Solicite uma Proposta → </button>
      </div>
    </div>
  );
}

const data = [
  ["Garantia", "100%", "de Resultados Garantidos"],
  ["Conclusão", "+80", "Certificações Completas"],
  ["Experiência", "+500", "Auditorias Concluídas"],
];

function mapInfo(array: any) {
  return array.map((item: any, index: number) => (
    <li key={index} id={`id${index}`}>
      <h6>{item[0]}</h6>
      <h1>{item[1]}</h1>
      <p>{item[2]}</p>
    </li>
  ));
}

function Content() {
  return (
    <>
      <ul className={styles.content}>{mapInfo(data)}</ul>
    </>
  );
}

export default function Info() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
