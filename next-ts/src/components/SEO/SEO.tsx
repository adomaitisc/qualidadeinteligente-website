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
    key: "keywords",
  },
  {
    name: "description",
    content: description,
    key: "description",
  },
  { name: "twitter:card", content: "summary", key: "twitterCard" },
  {
    property: "twitter:title",
    content: title,
    key: "twitterTitle",
  },
  {
    name: "twitter:image",
    content: image,
  },
  {
    property: "twitter:description",
    content: description,
    key: "twitterDescription",
  },
  {
    property: "og:title",
    content: "Qualidade Inteligente | Compromisso com a sua Certificação!",
    key: "ogTitle",
  },
  { property: "og:description", content: description, key: "ogDescription" },
  { property: "og:type", content: "website", key: "ogType" },
  {
    property: "og:url",
    content: "https://qualidadeinteligente-website.vercel.app",
    key: "ogUrl",
  },
  {
    property: "og:image",
    content: image,
    key: "ogImage",
  },
];

export default function SEO() {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {metaTags.map((tag) => (
        <meta key={tag.key} {...tag} />
      ))}
    </Head>
  );
}
