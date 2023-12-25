"use client";

import { ArrowRight, ExternalLink, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Balancer from "react-wrap-balancer";
import { ServiceCard } from "./services-card";

function handleOnMouseMove(e: any) {
  // @ts-ignore
  for (const card of document.querySelectorAll("#card")) {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
}

export function Services() {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  // make the ball follow the mouse

  useEffect(() => {
    if (cardsRef.current !== null) {
      cardsRef.current.addEventListener("mousemove", handleOnMouseMove);
    }

    return () => {
      if (cardsRef.current !== null) {
        cardsRef.current.removeEventListener("mousemove", handleOnMouseMove);
      }
    };
  }, [cardsRef]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      {/* Title */}
      <div className="mb-10 w-full max-w-xl">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Nossas Soluções
        </h2>
        <p className="text- mt-4 text-neutral-300">
          Por mais de 20 anos, nos especializamos em soluções para facilitar
          certificações e o gerenciamento da qualidade da sua construtora.
        </p>
        <p className="text- mt-4 text-neutral-300">
          Aperfeiçoamos e preparamos os seguintes serviços para você e a sua
          empresa:
        </p>
        <div className="mt-8 flex w-full justify-end">
          <Link
            href="/sobre"
            className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black"
          >
            Saiba mais <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={cardsRef}
        id="cards"
        className="relative grid w-full grid-cols-3 gap-4"
      >
        <ServiceCard
          title="ISO"
          subtitle="9001"
          imageSrc="/assets/home/iso-vector.svg"
          altText="iso9001"
          description="ISO 9001 tem foco na gestão da empresa e visa melhorar a qualidade de entrega para o cliente."
        />
        <ServiceCard
          title="NBR"
          subtitle="15.575"
          imageSrc="/assets/home/nbr-vector.svg"
          altText="nb15575"
          description="NBR 15575 define padrões para edifícios residenciais, assegurando qualidade e segurança."
        />
        <ServiceCard
          title="PBQP-H"
          imageSrc="/assets/home/pbqph-vector.svg"
          altText="pbqp-h"
          description="O PBQP-H visa aumentar a qualidade das construções de habitações e infraestruturas urbanas."
        />

        <div
          id="card"
          className="relative col-span-full h-72 cursor-crosshair rounded-xl bg-white/10 shadow-lg duration-300 ease-in-out"
        >
          <div id="card-border" />
          <div
            style={{
              height: "calc(100% - 2px)",
              width: "calc(100% - 2px)",
            }}
            id="card-content"
            className="relative m-[1px] flex h-full rounded-[11px] bg-[#0A0A0A] p-2"
          >
            <div className="relative mx-auto aspect-video w-3/4">
              <Image
                src="/assets/home/aditis-vector.svg"
                className="object-fit"
                fill
                alt="aditis"
              />
            </div>
            <div className="relative flex h-full flex-col justify-between p-7 text-neutral-200">
              <h3 className="flex items-center gap-2 font-borna text-base font-medium">
                Aditis - Controle Tecnológico
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Nossa mais nova solução com parceria Aditis, o controle
                tecnológico da sua empresa nunca mais será o mesmo.
              </p>
              <button className="mt-auto flex items-center justify-between gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 font-borna text-sm font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/5">
                Visite Aditis
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
