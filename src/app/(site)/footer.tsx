import { ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="mx-auto max-w-4xl rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent p-[1px] pb-0">
      <div className="flex h-72 gap-32 rounded-t-[23px] bg-gradient-to-b from-[#0A0A0A] to-[#050505] p-16 text-sm text-neutral-400">
        <div className="flex h-full flex-col justify-between ">
          <Link
            href="/"
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
        <div className="col-span-2 flex justify-start gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-white">Institucional</p>
            <FooterLink href="/">Início</FooterLink>
            <FooterLink href="/conteudo">Conteúdo</FooterLink>
            <FooterLink>Sobre nós</FooterLink>
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
          <div className="flex flex-col gap-4">
            <p className="text-white">Outro</p>
            <FooterLink href="/admin">Painel Administrador</FooterLink>
          </div>
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
