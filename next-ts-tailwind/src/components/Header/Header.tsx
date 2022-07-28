import Qualidade from "../Assets/Qualidade";

type ItemCardProps = {
  title: string;
  description: string;
  documentation: string;
};

export default function Header() {
  return (
    <div className="w-screen px-24 py-8 flex items-center justify-center">
      <Qualidade className="absolute left-24" />
      <ul className="flex flex-row items-end text-sm text-center text-zinc-300">
        <li>
          <a
            className="px-4 ease-in-out duration-300 hover:text-zinc-500"
            href="#"
          >
            Inicio
          </a>
        </li>
        <li className=" flex justify-center group relative">
          <p className="px-4">Soluções</p>
          <div className="hidden absolute pt-8 w-16 h-4 group-hover:block"></div>
          <ul className="hidden absolute rounded-md text-left mt-8 group-hover:block">
            <li className="px-12 pt-12 rounded-t-xl bg-zinc-900/30 block whitespace-nowrap backdrop-blur-3xl">
              <a
                href="#"
                className="text-base ease-in-out duration-300 hover:text-zinc-400"
              >
                ISO 9001 +
              </a>
              <div className="mt-2" />
              <p className="text-zinc-500 font-light leading-relaxed">
                Se trata da Gestão da Qualidade em qualquer
                <br />
                segmento do mercado
              </p>
            </li>
            <li className="px-12 py-12 rounded-b-xl bg-zinc-900/30 block whitespace-nowrap backdrop-blur-3xl">
              <a
                href="#"
                className="text-base ease-in-out duration-300 hover:text-zinc-400"
              >
                ISO 45001 +
              </a>
              <div className="mt-2" />
              <p className="text-zinc-500 font-light leading-relaxed">
                Orientação para melhorar a segurança e saúde
                <br />
                dos trabalhadores.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <a
            className="px-4 ease-in-out duration-300 hover:text-zinc-500"
            href="#"
          >
            Sobre nós
          </a>
        </li>
      </ul>
    </div>
  );
}
