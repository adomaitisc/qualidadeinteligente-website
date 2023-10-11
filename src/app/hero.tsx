import { ExternalLink } from "lucide-react";
import Balancer from "react-wrap-balancer";

import Image from "next/image";
import { Orgs } from "./orgs";

export function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <div className="relative h-[700px] w-full overflow-hidden rounded-3xl p-[1px]">
        <div className="relative z-20 h-full w-full overflow-hidden rounded-3xl">
          <div className="absolute z-10 flex h-full w-full items-center gap-8 p-16">
            {/* Text */}
            <div className="w-full">
              <h1 className="font-borna inline-block bg-gradient-to-r from-white/70 to-white bg-clip-text text-5xl font-semibold leading-none text-transparent">
                Simplifique a gestão da sua Qualidade
              </h1>
              <p className="mt-4 text-xl font-light text-neutral-300">
                <Balancer>
                  Provemos soluções customizadas para melhorar a qualidade e
                  agilizar o processo de certificação da sua empresa.
                </Balancer>
              </p>
              <button className="font-borna mt-8 flex items-center gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-blue-400/20">
                Entre em Contato
                <ExternalLink size={18} className="ml-2" />
              </button>
            </div>
            {/* Hero Image */}
            <div className="flex h-full w-full max-w-sm items-center justify-end">
              <div className="relative aspect-square w-full max-w-xs">
                <Image
                  fill
                  className="mx-auto"
                  src="/assets/home/orbit.svg"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          {/* Background Image */}
          <Image
            alt="bg"
            src="/assets/home/gradient.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/10" />
        <Image
          alt="bg"
          src="/assets/home/gradient.svg"
          fill
          className="scale-105 object-cover blur-md duration-300"
        />
      </div>
      <Orgs />
    </div>
  );
}
