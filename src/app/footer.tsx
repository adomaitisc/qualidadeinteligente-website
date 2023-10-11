import { ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="grid h-72 w-full grid-cols-3 rounded-t-3xl border border-white/10 bg-[#0A0A0A] p-16 text-sm text-neutral-400">
      <div className="col-span-1 flex flex-col justify-between">
        <Link
          href="https://qualidadeinteligente.com.br"
          className="flex cursor-pointer gap-3 duration-200 hover:text-white"
        >
          {/* Logo */}
          <Image
            src="/assets/home/qi-logo.svg"
            width={24}
            height={24}
            alt="QI"
          />
          <p>Qualidade Inteligente Ltda.</p>
        </Link>
        <div className="flex">
          <Link
            href="https://www.linkedin.com/company/qualidadeinteligente/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/qualidadeinteligente/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="https://www.facebook.com/qualidadeinteligente/"
            target="_blank"
            className="p-2 duration-200 hover:text-white"
          >
            <Facebook size={18} />
          </Link>
        </div>
      </div>
      <div className="col-span-2 flex gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-white">Institucional</p>
          <FooterLink>Início</FooterLink>
          <FooterLink>Soluções</FooterLink>
          <FooterLink>Sobre nós</FooterLink>
          <FooterLink>Blog</FooterLink>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white">Soluções</p>
          <FooterLink>ISO 9001</FooterLink>
          <FooterLink>NBR 15.575</FooterLink>
          <FooterLink>PBQP-H</FooterLink>
          <FooterLink external>
            Aditis <ExternalLink size={14} />
          </FooterLink>
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  href = "#",
  external = false,
  children,
}: {
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`duration-200 hover:text-white hover:underline ${
        external && "flex items-center gap-1"
      }`}
    >
      {children}
    </Link>
  );
}
