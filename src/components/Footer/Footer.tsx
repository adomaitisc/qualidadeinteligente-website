import Qualidade from "../Assets/Qualidade";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" mt-24 w-screen flex flex-col justify-center items-center">
      <Content />
    </section>
  );
};

const Content = () => {
  return (
    <div className="flex flex-row md:flex-nowrap flex-wrap items-start md:justify-between justify-center md:max-w-[65%] w-screen pt-12 md:px-12 px-8 md:rounded-t-2xl rounded-t-xl gap-8 bg-zinc-900 md:pb-16 pb-8">
      <Qualidade className="text-zinc-100 mt-2 hidden md:block" />
      <FooterItem
        title="Empresa"
        items={[
          ["Home", "/"],
          ["Sobre nós", "/about"],
        ]}
      />
      <FooterItem
        title="Soluções"
        items={[
          ["ISO 9001", "/iso-9001"],
          ["NBR 15.575", "nbr-15575"],
          ["PBQP-H", "/pbqp-h"],
        ]}
      />
      <FooterItem
        external={true}
        title="Redes Sociais"
        items={[
          [
            "LinkedIn",
            "https://www.linkedin.com/company/qualidadeinteligente/",
          ],
          ["Instagram", "https://www.instagram.com/qualidadeinteligente/"],
          ["Facebook", "https://pt-br.facebook.com/qualidadeinteligente/"],
        ]}
      />
      <FooterItem
        external
        title="Contato"
        items={[
          ["+55 11 97300-7033"],
          [
            "Contate o SAC",
            "mailto:qi@qualidadeinteligente.com?Subject=Assunto%20&Body=Mensagem",
          ],
        ]}
      />
    </div>
  );
};

type FooterItemProps = {
  title: string;
  items: [label: string, href?: string][];
  external?: boolean;
};

const FooterItem = ({ title, items, external }: FooterItemProps) => {
  return (
    <div className="flex flex-col w-32">
      <p className="text-zinc-600 md:text-sm font-medium mb-1 uppercase">
        {title}
      </p>
      <ul className="flex flex-col">
        {items.map((item: any, index: number) => (
          <li className="my-0.5 cursor-pointer" key={index}>
            {item[1] ? (
              external ? (
                <a
                  href={item[1]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-zinc-200 md:text-sm font-medium duration-300 group hover:text-blue-700"
                >
                  <h1 className="py-1">{item[0]}</h1>
                  <FiArrowUpRight className="ml-1 mt-1.5 group-hover:mt-1" />
                </a>
              ) : (
                <Link href={item[1]}>
                  <span className="flex text-zinc-200 md:text-sm font-medium duration-300 group hover:text-blue-700">
                    <h1 className="py-1">{item[0]}</h1>
                    <FiArrowUpRight className="ml-1 mt-1.5 group-hover:mt-1" />
                  </span>
                </Link>
              )
            ) : (
              <span className="text-zinc-200 text-sm font-light">
                {item[0]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
