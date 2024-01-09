"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function About() {
  const [index, setIndex] = useState(0);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % 4);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-3xl bg-gradient-to-t from-white/10 to-transparent p-[1px]">
      <div className="via w-full rounded-[23px] bg-gradient-to-t from-[#0A0A0A] to-[#050505] p-3 md:p-16">
        <div className="grid w-full grid-cols-1 pb-8 md:grid-cols-2">
          <div className="pb-4 pt-8">
            <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
              <Balancer>Consultoria da Qualidade com foco em pessoas.</Balancer>
            </h2>
            <p className="my-4 mt-8 text-neutral-300">
              A Qualidade Inteligente nasceu há mais de 20 anos com a
              necessidade de prover aquilo de mais importante para a contrução
              civil: qualidade.
            </p>
            <p className="mt-4 text-neutral-300">
              Desde então, a QI vem se especializando em soluções e para
              facilitar o gerenciamento da qualidade de construtoras e
              incorporadoras brasileiras.
            </p>
            <div className="mt-8 flex w-full justify-start">
              <Link
                href="/blog"
                className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black"
              >
                Saiba mais sobre nós <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative ml-16 hidden h-full overflow-hidden rounded-2xl border border-neutral-800 md:block">
            <Image
              alt="foto 0"
              src={"/assets/home/about/about0.jpg"}
              fill
              aria-selected={index === 1}
              className="z-20 rounded-xl object-cover opacity-0 shadow-md brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <Image
              alt="foto 1"
              src={"/assets/home/about/about1.jpg"}
              fill
              aria-selected={index === 2}
              className="z-20 rounded-xl object-cover opacity-0 shadow-md brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <Image
              alt="foto 2"
              src={"/assets/home/about/about2.jpg"}
              fill
              aria-selected={index === 3}
              className="z-20 rounded-xl object-cover opacity-0 shadow-md brightness-75 grayscale duration-1000 ease-in-out aria-selected:scale-105 aria-selected:opacity-100 aria-selected:grayscale-[0.3]"
            />
            <div id="noise-wrapper" className="z-10">
              <div id="noise" />
            </div>
          </div>
        </div>
        <div className="mt-16 hidden grid-cols-3 gap-8 text-sm md:grid">
          <div
            className="group space-y-2 duration-500 aria-hidden:opacity-50"
            aria-selected={index >= 0 + 1}
            aria-hidden={index != 0 + 1}
          >
            <div className="h-1 w-full bg-neutral-600 font-borna text-neutral-500">
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
            <div className="h-1 w-full bg-neutral-600 font-borna text-neutral-500">
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
            <div className="h-1 w-full bg-neutral-600 font-borna text-neutral-500">
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
        {/* Mobile View */}
        <Carousel setApi={setApi} className="md:hidden">
          <CarouselContent>
            <CarouselItem
              aria-current={current == 1}
              className="basis-5/6 aria-[current=false]:opacity-70"
            >
              <h3 className="text-lg  text-neutral-300">01.</h3>
              <p className="text-white">
                Nossa história começou em 2000, quando tivemos nosso primeiro
                contato com sistemas de gestão de qualidade, certificando as
                primeiras construtoras no Qualihab/CDHU.
              </p>
            </CarouselItem>
            <CarouselItem
              aria-current={current == 2}
              className="basis-5/6 aria-[current=false]:opacity-70"
            >
              <h3 className="text-lg text-neutral-300">02.</h3>
              <p className="text-white">
                Trabalhamos intensamente por 10 anos, crescendo de 2 para 28
                clientes, com um aumento médio de 34% ao mês. Nesse tempo,
                desenvolvemos nossa abordagem única para atender às necessidades
                dos clientes.
              </p>
            </CarouselItem>
            <CarouselItem
              aria-current={current == 3}
              className="basis-5/6 aria-[current=false]:opacity-70"
            >
              <h3 className="text-lg text-neutral-300">03.</h3>
              <p className="text-white">
                Atualmente, atendemos 49 clientes com mais de 500 auditorias
                concluídas. Montamos uma equipe excepcional ao longo dos anos,
                entregando resultados sólidos graças ao nosso compromisso com
                relacionamento, eficiência, técnica e resultados.
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="mt-2 flex items-center justify-center md:hidden">
          <BallProgress current={current} count={count} />
        </div>
      </div>
    </div>
  );
}

function BallProgress({ current, count }: { current: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-1 w-1 rounded-full ${
            i === current - 1 ? "bg-white" : "bg-neutral-600"
          }`}
        />
      ))}
    </div>
  );
}
