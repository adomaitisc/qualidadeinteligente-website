"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [passed, setPassed] = useState(false);

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
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/20 p-1.5 text-sm backdrop-blur-xl"
      >
        <div className="relative h-[34px] w-[34px]">
          <Image src="/assets/home/qi.png" fill alt="QI" />
        </div>
        <div className="flex gap-6 px-4">
          <p>Início</p>
          <p>Soluções</p>
          <p>Sobre nós</p>
          <p>Blog</p>
        </div>

        <AnimatePresence>
          {passed && (
            <motion.div
              className="relative h-[34px] overflow-clip"
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
