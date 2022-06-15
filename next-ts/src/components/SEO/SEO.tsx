import Head from "next/head";

const title = "Qualidade Inteligente | Compromisso com a sua Certificação!";
const description =
  "Preparamos uma Consultoria Personalizada, adaptada a gestão da sua empresa. Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada e desburocratizada.";
const image =
  "http://www.qualidadeinteligente.com/favicons/apple-touch-icon.png";
const metaTags = [
  {
    name: "keywords",
    content:
      "ISO 9001, ISO 45001, ISO 14001, Segurança do Trabalho, Qualidade, Certificação, Auditorias, PBQP-H, NBR 15.575, Normas Ambientais",
  },
  {
    name: "description",
    content: description,
  },
  { name: "twitter:card", content: "summary" },
  {
    property: "twitter:title",
    content: title,
  },
  {
    name: "twitter:image",
    content: image,
  },
  {
    property: "twitter:description",
    content: description,
  },
  {
    property: "og:title",
    content: "Qualidade Inteligente | Compromisso com a sua Certificação!",
  },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  {
    property: "og:url",
    content: "https://qualidadeinteligente-website.vercel.app",
  },
  {
    property: "og:image",
    content: image,
  },
];

export default function SEO() {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {metaTags.map((tag) => (
        <meta key={`${tag.name || tag.property}Key`} {...tag} />
      ))}
    </Head>
  );
}
