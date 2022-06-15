import styles from "../../styles/components/Testimonials.module.css";

import Button from "../Button";

const testimonials = {
  col1: [
    [
      "Murilo de Lara",
      "Diretor - Sivercon Construtora",
      "“Uma empresa séria, comprometida não só com o resultado final mas com o desenvolvimento dos seus parceiros no decorrer do processo. Criando uma filosofia QI dentro de cada um dos parceiros. Recomendo.”",
    ],
    [
      "Muricio da Silveira Vera",
      "Diretor - SVS Arquitetura",
      "“A contratação da QI como consultoria foi um dos melhores investimentos feitos pela SVS nos últimos tempos. A facilidade com que tudo transcorreu e a confiança passada por eles realmente é excepcional!”",
    ],
  ],
  col2: [
    [
      "Vinicius Banhos Baracuhy",
      "Diretor - Metacons",
      "“Com a Qi aqui na Metacons temos a certeza de um trabalho bem feito, atendimento personalizado e adaptado a nossa realidade, nossa parceria de sucesso já tem mais de 10 anos.”",
    ],
    [
      "Celi Gabriel Ferreira",
      "Diretora - Janela Incorporadora",
      "“A QI vem contribuindo distintamente na implementação e manutenção de procedimentos de qualidade na nossa empresa. A equipe da QI é bem preparada e está sempre disposta a ensinar.”",
    ],
    [
      "Luiz di Bonito",
      "Diretor - Construtora Elecon",
      "“Competência, comprometimento e dedicação. Ao longo de anos trabalhamos juntos aprendendo e passando adiante o conhecimento adquirido, enfrentando desafios que nos fizeram crescer profissionalmente e também como pessoas.”",
    ],
  ],
  col3: [
    [
      "Miguel da Silva Satre",
      "Diretor - Terra Nova",
      "“Grande parceira da Terra Nova na Gestão da Qualidade, sempre tem sido muito prestativa e muito competente no seu trabalho em nos apoiar na melhoria da Qualidade e da Segurança do Trabalho em nossas obras.”",
    ],
    [
      "Marco Aurelio Incontri Exner",
      "Diretor - Mabex",
      "“Trabalhamos com a equipe da Qi na implantação do sistema de qualidade para obtenção da ISO9001 e PBPQH- Nível A. Houve total compromisso com nossa equipe e em 2 meses implantamos todos os processos...”",
    ],
  ],
};

function mapTestimonials(array: any) {
  return array.map((item: any, index: number) => (
    <li key={index} className={index === 0 ? styles.li0 : ""}>
      <h6>{item[0]}</h6>
      <p id="role">{item[1]}</p>
      <p>{item[2]}</p>
    </li>
  ));
}

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>{mapTestimonials(testimonials.col1)}</ul>
        <div className={styles.buttonArea}>
          <Button type="button" text="Faça parte do nosso sucesso →" />
        </div>
      </div>
      <div>
        <ul className={styles.list}>{mapTestimonials(testimonials.col2)}</ul>
      </div>
      <div className={styles.last}>
        <ul className={styles.list}>{mapTestimonials(testimonials.col3)}</ul>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className={styles.text}>
      <h2>Algumas palavras sobre nós</h2>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <Text />
      <Content />
    </section>
  );
}
