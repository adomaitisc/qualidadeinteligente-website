import styles from "../../styles/components/Solutions.module.css";

const cards = {
  col1: [
    [
      "Auditorias Internas",
      "Requisito obrigatório em todas as normas referenciadas.",
      "- PBQP-H        - ISO 9001",
      "- ISO 14001    - ISO 45001",
    ],
    [
      "PBQP-H e a NBR 15.575",
      "PBQP-H – Plano Brasileiro de Qualidade e Produtividade no Habitat.",
      "NBR 15.575 - Norma de Desempenho Habitacional.",
      "",
    ],
  ],
  col2: [
    [
      "ISO 14001",
      "Visa promover a identificação, gerenciamento, monitoramento e pleno atendimento às legislações aplicáveis às questões ambientais. ",
    ],
    [
      "ISO 45001",
      "Visa fornecer uma orientação eficaz para melhorar as condições de segurança e saúde dos trabalhadores.",
    ],
    [
      "ISO 9001",
      "Associação Brasileira de Normas Técnicas, que trata da Gestão da Qualidade em qualquer segmento do mercado.",
    ],
  ],
};

function mapFirstCol(array: any) {
  return array.map((item: any, index: number) => (
    <li key={index}>
      <h6>{item[0]}</h6>
      <p>
        {item[1]}
        <br />
        <br />
        {item[2]}
        <br />
        {item[3]}
      </p>
    </li>
  ));
}

function mapSecondCol(array: any) {
  return array.map((item: any, index: number) => (
    <li key={index}>
      <h6>{item[0]}</h6>
      <p>{item[1]}</p>
    </li>
  ));
}

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.firstWrapper}>
        <ul className={styles.list}>{mapFirstCol(cards.col1)}</ul>
        <button>Explorar Certificações → </button>
      </div>
      <div className={styles.secondWrapper}>
        <ul className={styles.list}>{mapSecondCol(cards.col2)}</ul>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className={styles.text}>
      <h1>Nossas Soluções.</h1>
      <p>
        Preparamos uma Consultoria Personalizada, adaptada a gestão da sua
        empresa.
        <br />
        <br />
        Elaboramos a documentação necessária para atender aos requisitos das
        normas usando uma estrutura simplificada e desburocratizada.
      </p>
      <button>Contate nossa Equipe → </button>
    </div>
  );
}

function Cards() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}

export default Cards;
