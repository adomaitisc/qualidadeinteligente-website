"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Cookie() {
  const [shown, setShown] = useState(false);

  function dismissCookies() {
    localStorage.setItem("cookies", "true");
    setShown(false);
  }

  useEffect(() => {
    if (localStorage.getItem("cookies") === "true") {
      setShown(false);
    } else {
      setShown(true);
    }
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <div className="pointer-events-none fixed bottom-0 z-50 flex w-screen justify-end p-2 md:p-16">
          <motion.div
            initial={{
              scale: 0.95,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0.95,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.2,
              delay: 0.1,
            }}
            className="pointer-events-auto rounded-xl border border-white/10 bg-neutral-900/20 p-4 text-white backdrop-blur-xl"
          >
            <div className="flex max-w-sm items-center gap-4">
              <p className="text-xs text-neutral-200 md:text-sm">
                Nós usamos cookies para personalizar o conteúdo e experiência, e
                analisar nosso tráfego.
              </p>
              <button
                onClick={() => dismissCookies()}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-neutral-200 px-3 py-2 text-xs text-black duration-200 hover:bg-transparent hover:text-white md:text-sm"
              >
                Aceitar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
