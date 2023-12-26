"use client";

import { AnimatePresence, motion } from "framer-motion";

export function DeleteConfirmation({
  isOpen,
  close,
  deletePost,
}: {
  isOpen: boolean;
  close: () => void;
  deletePost: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-neutral-900/20 p-6 text-white backdrop-blur-xl"
          >
            <h1 className="text-center text-lg font-medium">
              Excluir Conteúdo
            </h1>
            <p className="text-sm text-neutral-200">
              Tem certeza que deseja excluir este conteúdo?
            </p>
            <div className="flex w-full items-center justify-center gap-4 px-4">
              <button
                onClick={() => close()}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
              >
                Cancelar
              </button>
              <button
                onClick={() => deletePost()}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
              >
                Excluir
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
