"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function ConfirmationModal({
  isOpen,
  close,
  submitPost,
}: {
  isOpen: boolean;
  close: () => void;
  submitPost: (userId: string) => void;
}) {
  const [userId, setUserId] = useState("");

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
              Confimar Postagem
            </h1>
            <p className="text-sm text-neutral-200">
              Digite seu id de usuário para postar
            </p>
            <div className="flex w-full gap-4 px-4">
              <input
                onChange={(e) => setUserId(e.target.value)}
                className="w-full rounded-xl bg-white/20 px-4 py-2 text-sm outline-none ring-0 backdrop-blur-xl"
                placeholder="ID de usuário"
              />
              <button
                onClick={() => submitPost(userId)}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
              >
                Postar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
