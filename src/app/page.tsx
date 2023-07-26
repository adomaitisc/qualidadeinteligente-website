import Image from "next/image";
import { Card } from "./card";
import {
  CornerRightDown,
  Expand,
  ExternalLink,
  Maximize,
  ZoomIn,
} from "lucide-react";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="p-4 pb-48 text-white">
      {/* Hero */}
      <div className="relative mx-auto mt-24 h-[700px] max-w-7xl overflow-hidden rounded-3xl">
        <div className="absolute z-10 flex h-full w-full items-center gap-8 p-16">
          {/* Text */}
          <div className="w-full">
            <h1 className="bg-gradient-to-t from-zinc-300 to-white bg-clip-text font-borna text-6xl font-semibold leading-none text-transparent">
              <Balancer>Simplifique a gestão da sua Qualidade</Balancer>
            </h1>
            <p className="mt-4 text-xl font-light text-zinc-300">
              <Balancer>
                Provemos soluções customizadas para melhorar a qualidade e
                agilizar o processo de certificação da sua empresa.
              </Balancer>
            </p>
            <button className="group mt-8 flex items-center gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-zinc-200 px-6 py-3 font-borna font-medium text-black duration-200 hover:opacity-80">
              Veja nossas soluções <CornerRightDown className="h-4 w-4" />
            </button>
          </div>
          {/* Hero Image */}
          <div className="flex h-full w-full max-w-sm items-center justify-end">
            <div className="relative aspect-square w-full max-w-xs">
              <Image
                fill
                className="mx-auto"
                src="/assets/orbit.svg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        {/* Background Image */}
        <Image
          alt="bg"
          src="/assets/gradient.svg"
          fill
          className="object-cover"
        />
      </div>
      {/* Clients */}
      <div className="mt-16 flex w-full flex-col items-center">
        <p className="mb-2 font-borna text-zinc-500">
          Atuando nas melhores construtoras
        </p>
        <Image
          width={800}
          height={200}
          src="/assets/testimonials.png"
          alt="clientes"
          className="mx-auto"
        />
      </div>

      {/* Services */}
      <div className="mx-auto mt-72 flex max-w-6xl flex-col items-center">
        {/* Title */}
        <h2 className="col-span- flex items-center gap-2 font-borna text-xl font-medium text-zinc-500">
          <Maximize size={20} />
          Soluções e serviços
        </h2>

        {/* Cards */}
        <div className="mt-8 grid w-full grid-cols-3 gap-6">
          <div className="col-span-1 flex cursor-crosshair flex-col items-end rounded-xl border border-white/10 bg-zinc-900/40 p-2 duration-200 hover:border-white/60">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/iso-vector.svg"
                className="object-fit"
                fill
                alt="iso9001"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-zinc-200">
              <h3 className="flex items-center gap-2 font-borna text-xl font-medium">
                ISO 9001
              </h3>
              <p className="mt-1 text-zinc-400">
                <Balancer>
                  Qualidade Inteligente: fornecendo requisitos para ISO 9001
                  para excelência em qualidade.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="col-span-1 flex cursor-crosshair flex-col items-end rounded-xl border border-white/10 bg-zinc-900/40 p-2 duration-200 hover:border-white/60">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/nbr-vector.svg"
                className="object-fit"
                fill
                alt="nb15575"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-zinc-200">
              <h3 className="flex items-center gap-2 font-borna text-xl font-medium">
                NBR 15.575
              </h3>
              <p className="mt-1 text-zinc-400">
                <Balancer>
                  Qualidade Inteligente: fornecendo requisitos para ISO 9001
                  para excelência em qualidade.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="col-span-1 flex cursor-crosshair flex-col items-end rounded-xl border border-white/10 bg-zinc-900/40 p-2 duration-200 hover:border-white/60">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/pbqph-vector.svg"
                className="object-fit"
                fill
                alt="pbqp-h"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-zinc-200">
              <h3 className="flex items-center gap-2 font-borna text-xl font-medium">
                PBQP-H
              </h3>
              <p className="mt-1 text-zinc-400">
                <Balancer>
                  Qualidade Inteligente: fornecendo requisitos para ISO 9001
                  para excelência em qualidade.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="col-span-full flex cursor-crosshair items-end rounded-xl border border-white/10 bg-zinc-900/40 p-2 duration-200 hover:border-white/60">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/aditis-vector.svg"
                className="object-fit"
                fill
                alt="aditis"
              />
            </div>
            <div className=" grid h-full grid-rows-2 justify-center p-7 text-zinc-200">
              <div className="my-auto">
                <h3 className="flex items-center gap-2 font-borna text-xl font-medium">
                  Aditis - Controle Tecnológico
                </h3>
                <p className="mt-1 text-zinc-400">
                  <Balancer>
                    Qualidade Inteligente: fornecendo requisitos para ISO 9001
                    para excelência em qualidade.
                  </Balancer>
                </p>
              </div>
              <button className="group mb-2 mt-auto flex items-center justify-between gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-zinc-200 px-6 py-3 font-borna font-medium text-black backdrop-blur-2xl duration-200 hover:border-sky-300">
                Visitar página
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre nós */}
      <div className="mx-auto mt-72 w-full max-w-7xl rounded-3xl bg-gradient-to-t from-zinc-900/70 to-black/10 p-16">
        <div className="grid w-full grid-cols-2">
          <div>
            <h2 className="font-borna text-4xl text-white">
              Uma empresa de consultoria da qualidade para construtoras, e
              desenvolvimento de software com a parceria Aditis.
            </h2>
            <p className="my-8">
              <Balancer>
                A Qualidade Inteligente nasceu há mais de 20 anos com a
                necessidade de prover aquilo de mais importante para a contrução
                civil: qualidade. Desde então, a QI vem se especializando em
                soluções e para facilitar o gerenciamento da qualidade de
                construtoras e incorporadoras brasileiras.
              </Balancer>
            </p>
          </div>
          <div className="ml-16 h-full rounded-xl border-2 border-zinc-600" />
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="space-y-2">
            <div
              aria-selected={true}
              className="h-1 w-full bg-zinc-600 font-borna aria-selected:bg-white"
            />
            <h3 className="text-lg">01.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-zinc-600 font-borna aria-selected:bg-white" />
            <h3 className="text-lg">02.</h3>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-zinc-600 font-borna aria-selected:bg-white" />
            <h3 className="text-lg">03.</h3>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
