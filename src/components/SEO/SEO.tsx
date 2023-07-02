import Head from "next/head";

type SEOProps = {
  pageTitle?: string;
  pageDescription?: string;
};

export default function SEO({ pageTitle, pageDescription }: SEOProps) {
  const title =
    pageTitle || "Qualidade Inteligente | Compromisso com sua Certificação!";
  const description =
    pageDescription ||
    "Preparamos uma Consultoria Personalizada, adaptada à sua empresa. Elaboramos a documentação necessária para atender aos requisitos das normas usando uma estrutura simplificada.";

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="keywords"
        content="ISO 9001, Qualidade, Certificação, Auditorias, PBQP-H, NBR 15.575, Qualidade Inteligente"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />

      {/* Twitter tags */}
      <meta
        name="twitter:domain"
        content="qualidadeinteligente-website.vercel.app"
      />
      <meta
        name="twitter:url"
        content="https://qualidadeinteligente-website.vercel.app"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/adomaitisc/qualidadeinteligente-website/main/next-ts-tailwind/public/social-1200x630.png"
      />

      {/* Facebook tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://qualidadeinteligente-website.vercel.app"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/adomaitisc/qualidadeinteligente-website/main/next-ts-tailwind/public/social-1200x630.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://raw.githubusercontent.com/adomaitisc/qualidadeinteligente-website/main/next-ts-tailwind/public/social-1200x630.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Favicon tags */}
      <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
    </Head>
  );
}
