import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="grid h-72 w-full grid-cols-3 rounded-t-3xl border border-white/10 bg-[#0A0A0A] p-16 text-sm text-neutral-400">
      <div className="col-span-1 flex flex-col justify-between">
        <div className="flex cursor-pointer gap-3 duration-200 hover:text-white">
          {/* Logo */}
          <Image src="/assets/qi-logo.svg" width={24} height={24} alt="QI" />
          <p>Qualidade Inteligente Ltda.</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Facebook size={18} />
          </Link>
        </div>
      </div>
      <div className="col-span-2 flex">
        <div className="flex flex-col gap-4">
          <p className="">Início</p>
          <p className="">Soluções</p>
          <p className="">Sobre nós</p>
          {/* <p className="">Blog</p> */}
        </div>
      </div>
    </div>
  );
}
