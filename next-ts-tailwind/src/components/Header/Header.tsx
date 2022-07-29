import Qualidade from "../Assets/Qualidade";

type ItemDropdownProps = {
  title: string;
  fLine: string;
  sLine: string;
  url: string;
  rounded: "bottom" | "top" | "none";
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
          <p className="px-4 ease-in-out duration-300 group-hover:text-zinc-500">
            Soluções
          </p>
          <div className="none absolute pt-8 w-16 h-4 group-hover:block"></div>
          <ul className="invisible scale-90 opacity-0 absolute rounded-md text-left mt-8 transform transition ease-in-out duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
            <ItemDropdown
              title="ISO 9001"
              fLine="Se trata da Gestão da Qualidade em qualquer"
              sLine="segmento do mercado."
              url="#"
              rounded="top"
            />
            <ItemDropdown
              title="ISO 45001"
              fLine="Orientação para melhorar a segurança e saúde"
              sLine="dos trabalhadores."
              url="#"
              rounded="bottom"
            />
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

const ItemDropdown = ({
  title,
  fLine,
  sLine,
  url,
  rounded,
}: ItemDropdownProps) => {
  return (
    <li
      className={`${
        rounded === `bottom`
          ? `rounded-b-xl pt-4 pb-12`
          : rounded === `top`
          ? `rounded-t-xl pt-12 pb-4`
          : null
      } px-12 bg-zinc-900 block whitespace-nowrap`}
    >
      <a
        href={url}
        className="text-base ease-in-out duration-300 hover:text-zinc-400"
      >
        {title}
      </a>
      <div className="mt-2" />
      <p className="text-zinc-500 font-light leading-relaxed">
        {fLine}
        <br />
        {sLine}
      </p>
    </li>
  );
};
