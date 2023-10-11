"use client";

import { ExternalLink, Maximize } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Balancer from "react-wrap-balancer";

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
  // make the ball follow the mouse

  useEffect(() => {
    // @ts-ignore
    document
      .getElementById("cards")
      .addEventListener("mousemove", handleOnMouseMove);

    return () => {
      // @ts-ignore
      document
        .getElementById("cards")
        .removeEventListener("mousemove", handleOnMouseMove);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      {/* Title */}
      <div className="mb-10 w-full max-w-xl">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Nossas Soluções
        </h2>
        <p className="text- mt-4 text-neutral-300">
          Há mais de 20 anos, nos especializamos em soluções para facilitar
          certificações e o gerenciamento da qualidade da sua construtora.
        </p>
      </div>

      {/* Cards */}
      <div id="cards" className="relative grid w-full grid-cols-3 gap-4">
        <div
          id="card"
          className="relative col-span-1 flex cursor-crosshair flex-col items-end rounded-xl bg-white/10 shadow-lg duration-300 ease-in-out"
        >
          <div id="card-border" />
          <div
            id="card-content"
            className="h-[calc(100% - 2px)] w-[calc(100% - 2px)] relative m-[1px] rounded-[11px] bg-[#0A0A0A] p-2"
          >
            <div className="relative mx-auto aspect-video w-3/4">
              <Image
                src="/assets/iso-vector.svg"
                className="object-fit"
                fill
                alt="iso9001"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-neutral-200">
              <h3 className="flex items-center gap-2 font-borna text-base font-medium">
                ISO 9001
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Qualidade Inteligente: fornecendo requisitos para ISO 9001 para
                excelência em qualidade.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card"
          className="relative col-span-1 flex cursor-crosshair flex-col items-end rounded-xl bg-white/10 shadow-lg duration-300 ease-in-out"
        >
          <div id="card-border" />
          <div
            id="card-content"
            className="h-[calc(100% - 2px)] w-[calc(100% - 2px)] relative m-[1px] rounded-[11px] bg-[#0A0A0A] p-2"
          >
            <div className="relative mx-auto aspect-video w-3/4">
              <Image
                src="/assets/nbr-vector.svg"
                className="object-fit"
                fill
                alt="nb15575"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-neutral-200">
              <h3 className="flex items-center gap-2 font-borna text-base font-medium">
                NBR 15.575
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Qualidade Inteligente: fornecendo requisitos para ISO 9001 para
                excelência em qualidade.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card"
          className="relative col-span-1 flex cursor-crosshair flex-col items-end rounded-xl bg-white/10 shadow-lg duration-300 ease-in-out"
        >
          <div id="card-border" />
          <div
            id="card-content"
            className="h-[calc(100% - 2px)] w-[calc(100% - 2px)] relative m-[1px] rounded-[11px] bg-[#0A0A0A] p-2"
          >
            <div className="relative mx-auto aspect-video w-3/4">
              <Image
                src="/assets/pbqph-vector.svg"
                className="object-fit"
                fill
                alt="pbqp-h"
              />
            </div>
            <div className="flex flex-col justify-end p-7 text-neutral-200">
              <h3 className="flex items-center gap-2 font-borna text-base font-medium">
                PBQP-H
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Qualidade Inteligente: fornecendo requisitos para ISO 9001 para
                excelência em qualidade.
              </p>
            </div>
          </div>
        </div>
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
                src="/assets/aditis-vector.svg"
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
                Qualidade Inteligente: fornecendo requisitos para ISO 9001 para
                excelência em qualidade.
              </p>
              <button className="mt-auto flex items-center justify-between gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 font-borna text-sm font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/20">
                Saiba mais
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
