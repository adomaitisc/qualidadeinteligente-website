"use client";

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
    <>
      {shown && (
        <div className="fixed bottom-16 right-16 z-50 rounded-xl border border-white/10 bg-neutral-900/20 p-4 text-white backdrop-blur-xl">
          <div className="flex max-w-6xl items-center gap-4">
            <p className="text-sm text-neutral-200">
              Nós usamos cookies para personalizar o conteúdo
              <br />e experiência, e analisar nosso tráfego.
            </p>
            <button
              onClick={() => dismissCookies()}
              className="flex items-center gap-1 rounded-lg border border-white/10 bg-neutral-200 px-3 py-2 text-sm text-black duration-200 hover:bg-transparent hover:text-white"
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
