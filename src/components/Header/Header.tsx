import Qualidade from "../Assets/Qualidade";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="w-screen px-24 py-8 flex items-center justify-center z-10">
      <Link href="/">
        <Qualidade className="absolute md:left-24 left-8 top-0 md:mt-6 mt-8 text-zinc-100" />
      </Link>
      <ul className="flex flex-row items-end text-sm text-center font-medium text-zinc-300 md:visible invisible">
        <li>
          <Link href="/">
            <p className="px-4 ease-in-out duration-300 hover:text-zinc-500 cursor-pointer">
              Início
            </p>
          </Link>
        </li>
        <li className=" flex justify-center group relative z-20">
          <p className="px-4 ease-in-out duration-300 group-hover:text-zinc-500">
            Soluções
          </p>
          <div className="none absolute pt-8 w-16 h-4 group-hover:block"></div>
          <ul className="invisible scale-90 opacity-0 absolute rounded-md text-left mt-8 transform transition ease-in-out duration-100 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
            <ItemDropdown
              title="ISO 9001"
              fLine="Se trata da Gestão da Qualidade em qualquer"
              sLine="segmento do mercado."
              url="/iso-9001"
              rounded="top"
            />
            <ItemDropdown
              title="NBR 15.575"
              fLine="Norma de Desempenho Habitacional."
              url="/nbr-15575"
              rounded="none"
            />
            <ItemDropdown
              title="PBQP-H"
              fLine="Plano Brasileiro de Qualidade e"
              sLine="Produtividade no Habitat."
              url="/pbqp-h"
              rounded="bottom"
            />
          </ul>
        </li>
        <li>
          <Link href="/about">
            <p className="px-4 ease-in-out duration-300 hover:text-zinc-500 cursor-pointer">
              Sobre nós
            </p>
          </Link>
        </li>
      </ul>
      {/* mobile menu */}
      <div className="flex md:hidden">
        <div
          className="absolute space-y-2 cursor-pointer right-8 top-8"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className="block h-0.5 w-8 bg-zinc-200 rounded-full"></span>
          <span className="block h-0.5 w-8 bg-zinc-200 rounded-full"></span>
        </div>

        <div
          className={`${
            isDrawerOpen
              ? `overflow-hidden absolute w-full overflow-y-hidden top-0 left-0 bg-zinc-900 rounded-b-xl backdrop-blur-lg z-20 pt-24 pb-12`
              : `hidden`
          }`}
        >
          <div
            className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              className="h-8 w-8 text-zinc-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex items-start w-full px-4 gap-3 justify-center">
            <li className="my-2 flex flex-col gap-4">
              <p className="text-2xl font-bold text-zinc-200 mb-4">Soluções</p>
              <Link href="/iso-9001">
                <a className=" font-medium text-zinc-200 flex">
                  ISO 9001
                  <FiArrowUpRight className="ml-2 mt-1" />
                </a>
              </Link>
              <Link href="/pbqp-h">
                <a className=" font-medium text-zinc-200 flex">
                  PBQP-H
                  <FiArrowUpRight className="ml-2 mt-1" />
                </a>
              </Link>
              <Link href="/nbr-15575">
                <a className=" font-medium text-zinc-200 flex">
                  NBR 15.575
                  <FiArrowUpRight className="ml-2 mt-1" />
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/">
                <a className="text-2xl font-bold text-zinc-400 mr-1">Início</a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/about">
                <a className="text-2xl font-bold text-zinc-400">Sobre Nós</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type ItemDropdownProps = {
  title: string;
  fLine: string;
  sLine?: string;
  url: string;
  rounded: "bottom" | "top" | "none";
};

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
          : `py-4`
      } px-8 bg-zinc-900 block w-[400px]`}
    >
      <Link href={url}>
        <span className="flex flex-row text-base ease-in-out duration-300 hover:text-zinc-400 cursor-pointer">
          <h1 className="pl-4 py-1 peer">{title}</h1>
          <FiArrowUpRight className="ml-2 mt-1.5 peer-hover:mt-1" />
        </span>
      </Link>
      <p className="text-zinc-500 px-4 font-light leading-relaxed">
        {fLine}
        <br />
        {sLine}
      </p>
    </li>
  );
};

export default Header;
