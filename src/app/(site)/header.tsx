"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderMenu } from "./header-menu";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const [passed, setPassed] = useState(pathname !== "/");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleScroll() {
    if (window.scrollY > window.innerHeight / 2) {
      setPassed(true);
    } else {
      setPassed(false);
    }
  }

  useEffect(() => {
    if (pathname !== "/") return setPassed(true);
    else setPassed(false);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="fixed left-1/2 top-0 z-50 mx-auto mt-6 -translate-x-1/2 place-items-center font-borna text-white">
      <div className="relative flex items-center gap-2 rounded-xl border border-white/10 p-1.5 text-sm shadow-lg">
        <div className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-neutral-900/20 backdrop-blur-xl" />
        <div className="relative h-[34px] w-[34px]">
          <Image src="/assets/home/qi.png" fill alt="QI" />
        </div>
        <div className="z-10 flex gap-6 px-4">
          <Link
            href="/"
            aria-disabled={pathname === "/"}
            className="cursor-pointer whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400"
          >
            Início
          </Link>
          <Link
            href="/conteudo"
            aria-disabled={pathname === "/conteudo"}
            className="cursor-pointer whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400"
          >
            Conteúdo
          </Link>
          <p className="cursor-pointer whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400">
            Sobre nós
          </p>
          <div
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => setMenuOpen(false)}
            className="group relative duration-150 hover:text-neutral-400"
          >
            <p className="flex items-center gap-2 whitespace-nowrap">
              Soluções
              <ChevronDown
                size={14}
                className="duration-150 group-hover:rotate-180"
              />
            </p>
            <AnimatePresence>{menuOpen && <HeaderMenu />}</AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
          {passed && (
            <motion.div
              className="relative h-[34px] overflow-clip rounded-lg"
              initial={{ width: 0 }}
              animate={{ width: 141.76 }}
              exit={{ width: 0 }}
            >
              <button className="absolute left-0 top-0 h-full shrink-0 overflow-hidden whitespace-nowrap rounded-lg border border-black/10 bg-white px-3 py-1.5 font-borna font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/5">
                Entre em contato
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
