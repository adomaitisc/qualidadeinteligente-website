"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AboutUs() {
  const [index, setIndex] = useState(0);
  // control the images and the text

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-3xl bg-gradient-to-t from-neutral-800/60 via-transparent p-[1px]">
      <div className="via w-full rounded-3xl bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent p-16">
        <div className="grid w-full grid-cols-2 pb-8">
          <div className="py-8">
            <h2 className="font-borna inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text text-2xl font-medium text-transparent">
              <Balancer>Consultoria da Qualidade com foco em pessoas.</Balancer>
            </h2>
            <p className="my-4 mt-8 text-neutral-300">
              <Balancer>
                A Qualidade Inteligente nasceu há mais de 20 anos com a
                necessidade de prover aquilo de mais importante para a contrução
                civil: qualidade.
              </Balancer>
            </p>
            <p className="mt-4 text-neutral-300">
              <Balancer>
                Desde então, a QI vem se especializando em soluções e para
                facilitar o gerenciamento da qualidade de construtoras e
                incorporadoras brasileiras.
              </Balancer>
            </p>
          </div>
          <div className="relative ml-16 h-full overflow-hidden rounded-2xl border border-neutral-800">
            <Image
              alt="foto 0"
              src={"/assets/home/about/about0.jpg"}
              fill
              aria-selected={index === 1}
              className="z-20 rounded-xl object-cover opacity-0 brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <Image
              alt="foto 1"
              src={"/assets/home/about/about1.jpg"}
              fill
              aria-selected={index === 2}
              className="z-20 rounded-xl object-cover opacity-0 brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <Image
              alt="foto 2"
              src={"/assets/home/about/about2.jpg"}
              fill
              aria-selected={index === 3}
              className="z-20 rounded-xl object-cover opacity-0 brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <div id="noise-wrapper" className="z-10">
              <div id="noise" />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 text-sm">
          <div
            className="group space-y-2 duration-500 aria-hidden:opacity-50"
            aria-selected={index >= 0 + 1}
            aria-hidden={index != 0 + 1}
          >
            <div className="font-borna h-1 w-full bg-neutral-600 text-neutral-500">
              <div className="h-1 w-0 bg-white duration-1000 ease-in-out group-aria-selected:w-full" />
            </div>
            <h3 className="text-lg">01.</h3>
            <p className="text-neutral-500 duration-1000 group-aria-selected:text-white">
              Nossa história começou em 2000, quando tivemos nosso primeiro
              contato com sistemas de gestão de qualidade, certificando as
              primeiras construtoras no Qualihab/CDHU.
            </p>
          </div>
          <div
            className="group space-y-2 duration-500 aria-hidden:opacity-50"
            aria-selected={index >= 1 + 1}
            aria-hidden={index != 1 + 1}
          >
            <div className="font-borna h-1 w-full bg-neutral-600 text-neutral-500">
              <div className="h-1 w-0 bg-white duration-1000 ease-in-out group-aria-selected:w-full" />
            </div>
            <h3 className="text-lg">02.</h3>
            <p className="text-neutral-500 duration-1000 group-aria-selected:text-white">
              Trabalhamos intensamente por 10 anos, crescendo de 2 para 28
              clientes, com um aumento médio de 34% ao mês. Nesse tempo,
              desenvolvemos nossa abordagem única para atender às necessidades
              dos clientes.
            </p>
          </div>
          <div
            className="group space-y-2 duration-500 aria-hidden:opacity-50"
            aria-selected={index >= 2 + 1}
            aria-hidden={index != 2 + 1}
          >
            <div className="font-borna h-1 w-full bg-neutral-600 text-neutral-500">
              <div className="h-1 w-0 bg-white duration-1000 ease-in-out group-aria-selected:w-full" />
            </div>
            <h3 className="text-lg">03.</h3>
            <p className="text-neutral-500 duration-1000 group-aria-selected:text-white">
              Atualmente, atendemos 49 clientes com mais de 500 auditorias
              concluídas. Montamos uma equipe excepcional ao longo dos anos,
              entregando resultados sólidos graças ao nosso compromisso com
              relacionamento, eficiência, técnica e resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
