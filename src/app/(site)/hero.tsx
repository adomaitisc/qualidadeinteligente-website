"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Balancer from "react-wrap-balancer";

import Image from "next/image";
import { Orgs } from "./orgs";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 md:gap-8">
      <div className="relative h-[500px] w-full overflow-hidden rounded-3xl p-[1px] md:h-[700px]">
        <div className="relative z-20 h-full w-full overflow-hidden rounded-3xl">
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-4 md:flex md:flex-row md:p-16">
            {/* Text */}
            <div className="w-full">
              <h1 className="inline-block bg-gradient-to-r from-white/70 to-white bg-clip-text font-borna text-3xl font-semibold leading-none text-transparent md:text-5xl">
                Simplifique a gestão da sua Qualidade
              </h1>
              <p className="mt-4 text-base font-light leading-tight text-neutral-300 md:text-xl md:leading-normal">
                <Balancer>
                  Provemos soluções customizadas para melhorar a qualidade e
                  agilizar o processo de certificação da sua empresa.
                </Balancer>
              </p>
              <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <button className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 font-borna text-sm font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/20">
                  Entre em contato
                </button>
                <Link
                  href="/blog"
                  className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black"
                >
                  Descubra nossas soluções <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          {/* Background Image */}
          <Image
            alt="bg"
            src="/assets/home/imag.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <Orgs />
    </div>
  );
}
