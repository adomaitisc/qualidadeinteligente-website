import Image from "next/image";
import { Card } from "./card";
import { CornerRightDown, Maximize } from "lucide-react";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="p-4 pb-48 text-white">
      {/* Hero */}
      <div className="relative mx-auto mt-24 h-[65vh] max-w-7xl overflow-hidden rounded-3xl">
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
            {/* <button className="group mt-8 flex w-[204.38px] items-center gap-2 whitespace-nowrap rounded-xlborder-2 border-zinc-600 bg-black/60 px-6 py-3 text-white duration-300 hover:w-[236.38px] hover:border-purple-300">
              Veja nossas soluções <CornerRightDown className="h-4 w-4" />
            </button> */}
          </div>
          {/* Image */}
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
        <Image
          alt="bg"
          src="/assets/background.svg"
          fill
          className="object-cover"
        />
      </div>
      {/* Clientes */}
      <div className="mt-16 flex w-full flex-col items-center">
        <p className="mb-2 font-borna text-zinc-500">
          Clientes certificados e satisfeitos
        </p>
        <Image
          width={800}
          height={200}
          src="/assets/testimonials.png"
          alt="clientes"
          className="mx-auto"
        />
      </div>

      {/* Soluções */}
      <div className="mx-auto mt-32 grid w-full max-w-6xl grid-cols-7 gap-6">
        <h1 className="col-span-7 flex items-center gap-2 font-borna text-2xl text-zinc-500">
          <Maximize size={20} />
          Nossas soluções
        </h1>
        <div className="col-span-4">
          <Card
            href="/"
            external
            title="Aditis - Controle Tecnológico"
            body="Plataforma específica para controle tecnológico de estruturas, fundações, pavimentação e agregados."
          />
        </div>
        <div className="col-span-3">
          <Card
            href="/"
            title="NBR 15.575"
            body="Um conjunto normativo que visa melhorar a qualidade de habitações, estabelecendo parâmetros e abrangendo toda a cadeia produtiva."
          />
        </div>
        <div className="col-span-3">
          <Card
            href="/"
            title="PBQP-H"
            body="Programa governamental cujo objetivo é promover a qualidade e a produtividade na construção civil."
          />
        </div>
        <div className="col-span-3">
          <Card
            href="/"
            title="ISO-9001"
            body="Norma internacional que estabelece requisitos para sistemas de gestão de qualidade."
          />
        </div>
      </div>

      {/* Sobre nós */}
      <div className="mx-auto mt-32 w-full max-w-7xl rounded-3xl bg-gradient-to-t from-zinc-900/70 to-black/10 p-16">
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
