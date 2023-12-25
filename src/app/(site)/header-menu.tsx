import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeaderMenu() {
  return (
    <div className="absolute left-1/2 top-0 z-50 h-20 w-full -translate-x-1/2 text-white">
      <div
        style={{
          width: "clamp(500px, 50vw, 700px)",
        }}
        className="absolute left-1/2 top-0 mt-10 -translate-x-1/2"
      >
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
          <MenuItem
            title="ISO 9001"
            description="ISO 9001 tem foco na gestão da empresa e visa melhorar a qualidade de entrega para o cliente."
          />
          <MenuItem
            title="NBR 15.575"
            description="NBR 15575 define padrões para edifícios residenciais, assegurando qualidade e segurança."
          />
          <MenuItem
            title="PBQP-H"
            description="O PBQP-H visa aumentar a qualidade das construções de habitações e infraestruturas urbanas."
          />
          <MenuItem
            title="Aditis - Controle Tecnológico"
            description="Nossa mais nova solução com parceria Aditis, o controle tecnológico da sua empresa nunca mais será o mesmo."
          />
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

function MenuItem({ className, title, description, href }: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col gap-4 rounded-lg border border-transparent p-4 duration-300 ease-out hover:border-white/40 hover:bg-black/70 hover:shadow-xl hover:shadow-white/5",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="line-clamp-2 truncate whitespace-normal text-sm opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}
