import { motion } from "framer-motion";
import Link from "next/link";

export function HeaderMobile() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-50 h-20 w-full -translate-x-1/2 text-white">
      <div className="absolute left-1/2 top-0 mt-14 w-full -translate-x-1/2">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.1,
            delay: 0.1,
          }}
          className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-neutral-900/20 p-4 shadow-2xl backdrop-blur-xl"
        >
          <Link href="/">Início</Link>
          <Link href="/">Conteúdo</Link>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Soluções</Link>
        </motion.div>
      </div>
    </div>
  );
}

type MenuItemProps = {
  className?: string;
  title: string;
  description: string;
  href?: string;
};
