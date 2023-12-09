"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [passed, setPassed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleScroll() {
    if (window.scrollY > window.innerHeight / 2) {
      setPassed(true);
    } else {
      setPassed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-1/2 top-0 z-50 mx-auto mt-6 -translate-x-1/2 place-items-center font-borna text-white">
      <motion.div
        layout
        className="relative flex items-center gap-2 rounded-xl border border-white/10 p-1.5 text-sm"
      >
        <div className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-neutral-900/20 backdrop-blur-xl" />
        <div className="relative h-[34px] w-[34px]">
          <Image src="/assets/home/qi.png" fill alt="QI" />
        </div>
        <div className="z-10 flex gap-6 px-4">
          <p>Início</p>
          <p>Conteúdo</p>
          <div
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => setMenuOpen(false)}
            className="group relative"
          >
            <p className="flex items-center gap-2">
              Soluções
              <ChevronDown
                size={14}
                className="duration-150 group-hover:rotate-180"
              />
            </p>
            <AnimatePresence>
              {menuOpen && (
                <div className="absolute left-1/2 top-0 z-50 h-20 w-full -translate-x-1/2">
                  <div className="absolute left-1/2 top-0 mt-10 w-[50vw] -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.2,
                        delay: 0.2,
                      }}
                      className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-neutral-900/20 p-4 backdrop-blur-xl"
                    >
                      <SolutionItem
                        title="ISO 9001"
                        description="ISO 9001 tem foco na gestão da empresa e visa melhorar a qualidade de entrega para o cliente."
                      />
                      <SolutionItem
                        title="NBR 15.575"
                        description="NBR 15575 define padrões para edifícios residenciais, assegurando qualidade e segurança."
                      />
                      <SolutionItem
                        title="PBQP-H"
                        description="O PBQP-H visa aumentar a qualidade das construções de habitações e infraestruturas urbanas."
                      />
                      <SolutionItem
                        title="Aditis - Controle Tecnológico"
                        description="Nossa mais nova solução com parceria Aditis, o controle tecnológico da sua empresa nunca mais será o mesmo."
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <p>Sobre nós</p>
          {/* <p>Blog</p> */}
        </div>
        <AnimatePresence>
          {passed && (
            <motion.div
              className="relative h-[34px] overflow-clip rounded-lg"
              layout
              initial={{ width: 0 }}
              animate={{ width: 141.76 }}
              exit={{ width: 0 }}
            >
              <button className="absolute left-0 top-0 h-full shrink-0 overflow-hidden whitespace-nowrap rounded-lg border border-black/10 bg-white px-3 py-1.5 font-borna font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/20">
                Entre em contato
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function SolutionItem({ className, title, description, href }: any) {
  return (
    <motion.div
      whileHover={{ translateY: -2 }}
      className={cn(
        "flex cursor-pointer flex-col gap-4 rounded-lg p-4 duration-300 ease-out hover:bg-black/70 hover:shadow-xl hover:shadow-white/5",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="line-clamp-2 truncate whitespace-normal text-sm opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
