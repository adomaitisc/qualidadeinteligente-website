import Facebook from "../Assets/Facebook";
import Instagram from "../Assets/Instagram";
import LinkedIn from "../Assets/LinkedIn";

const socialUrl = {
  fb: "https://www.facebook.com/qualidadeinteligente",
  ig: "https://www.instagram.com/qualidadeinteligente",
  li: "https://www.linkedin.com/in/qualidadeinteligente",
};

function Social() {
  return (
    <ul className="flex gap-6 mb-8">
      <li>
        <a
          className="text-zinc-300 ease-in-out duration-300 hover:text-zinc-500"
          href={socialUrl.fb}
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          className="text-zinc-300 ease-in-out duration-300 hover:text-zinc-500"
          href={socialUrl.ig}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          className="text-zinc-300 ease-in-out duration-300 hover:text-zinc-500"
          href={socialUrl.li}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </li>
    </ul>
  );
}

function Text() {
  return (
    <div className="text-center">
      <h1 className="text-8xl text-zinc-100 font-bold">
        Compromisso com
        <br />a sua Certificação.
      </h1>
      <div className="mt-8"></div>
      <p className="text-xl font-light text-zinc-300">
        Nossa equipe se compromete a fornecer aos seus clientes
        <br />o resultado positivo da sua certificação.
      </p>
    </div>
  );
}

export default function Landing() {
  return (
    <section className="h-[700px] flex flex-col justify-center items-center">
      <Social />
      <Text />
    </section>
  );
}
