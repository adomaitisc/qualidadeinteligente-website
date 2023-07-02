import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

const Solutions = () => {
  return (
    <section className="w-full mt-24 flex justify-center items-center">
      <Content />
    </section>
  );
};

const Content = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-2 gap-8 px-32">
      <div className=" cursor-pointer border-2 overflow-hidden h-64 relative flex col-span-4 row-span-1 hover:border-purple-700/40 border-zinc-800 duration-300 rounded-xl p-6 group">
        <Image
          src="/aditis.svg"
          layout="fill"
          alt="aditis"
          className="h-full w-[200%] absolute object-cover bg-repeat z-0 opacity-80 group-hover:scale-110 group-hover:-translate-x-5 grayscale group-hover:translate-y-5 duration-300 group-hover:grayscale-0"
        />
        <span className="h-[140%] w-[110%] absolute z-0 opacity-20 group-hover:scale-110 duration-300 group-hover:opacity-60 -translate-y-8 -translate-x-6  ">
          <Spline
            className="p-0 m-0"
            scene="https://prod.spline.design/cTafH-Fb2ifkPKAP/scene.splinecode"
          />
        </span>
        <div className="z-20">
          <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
            <h1 className="py-1 peer text-2xl">
              Controle Tecnológico - Aditis
            </h1>
            <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
          </span>
          <div className="mt-2"></div>
          <p className="md:text-base text-lg w-2/3 text-zinc-400 font-light duration-200">
            Plataforma específica para controle tecnológico de estruturas,
            fundações, pavimentação e agregados.
          </p>
        </div>
      </div>
      <div className=" cursor-pointer border-2 col-span-3 row-span-1 border-zinc-800 rounded-xl p-6">
        <Link href="/nbr-15575">
          <span>
            <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
              <h1 className="py-1 peer text-2xl">NBR 15.575</h1>
              <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
            </span>
            <div className="mt-2"></div>
            <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
              Norma de Desempenho Habitacional.
            </p>
          </span>
        </Link>
      </div>
      <div className=" cursor-pointer border-2 col-span-2 row-span-1 border-zinc-800 rounded-xl p-6">
        <Link href="/pbqp-h">
          <span>
            <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
              <h1 className="py-1 peer text-2xl">PBQP-H</h1>
              <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
            </span>
            <div className="mt-2"></div>
            <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
              Plano Brasileiro de Qualidade e Produtividade no Habitat.
            </p>
          </span>
        </Link>
      </div>
      <div className=" cursor-pointer border-2 h-64 col-span-3 row-span-1 border-zinc-800 rounded-xl p-6">
        <Link href="/iso-9001">
          <span>
            <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
              <h1 className="py-1 peer text-2xl">ISO-9001</h1>
              <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
            </span>
            <div className="mt-2"></div>
            <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
              Associação Brasileira de Normas Técnicas, que trata da Gestão da
              Qualidade em qualquer segmento do mercado.
            </p>
          </span>
        </Link>
      </div>
      <div className=" cursor-pointer border-2 col-span-2 row-span-1 border-zinc-800 rounded-xl p-6">
        <span>
          <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
            <h1 className="py-1 peer text-2xl">Auditorias Internas</h1>
            <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
          </span>
          <div className="mt-2"></div>
          <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
            Plano Brasileiro de Qualidade e Produtividade no Habitat.
          </p>
        </span>
      </div>
    </div>
  );
};

type CardProps = {
  title: string;
  fLine: string;
  sLine?: string;
  tLine?: string;
  url?: string;
};

const Card = ({ title, fLine, sLine, tLine, url }: CardProps) => {
  return (
    <li className="md:w-72 w-[90%] p-8 rounded-xl p-6 bg-zinc-900 duration-100">
      {url ? (
        <Link href={url}>
          <span>
            <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200 cursor-pointer">
              <h1 className="py-1 peer text-2xl">{title}</h1>
              <FiArrowUpRight className="ml-2 mt-1.5 group-hover:mt-1 peer-hover:mt-1" />
            </span>
            <div className="mt-2"></div>
            <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
              {fLine}

              {sLine && (
                <>
                  <br />
                  <br />
                  {sLine}
                </>
              )}
              {tLine && (
                <>
                  <br />
                  {tLine}
                </>
              )}
            </p>
          </span>
        </Link>
      ) : (
        <span>
          <span className="flex flex-row items-start md:text-xl text-2xl ease-in-out duration-300 text-zinc-200">
            <h1 className="py-1 peer text-2xl">{title}</h1>
          </span>
          <div className="mt-2"></div>
          <p className="md:text-base text-lg text-zinc-400 font-light duration-200">
            {fLine}

            {sLine && (
              <>
                <br />
                <br />
                {sLine}
              </>
            )}
            {tLine && (
              <>
                <br />
                {tLine}
              </>
            )}
          </p>
        </span>
      )}
    </li>
  );
};

export default Solutions;
