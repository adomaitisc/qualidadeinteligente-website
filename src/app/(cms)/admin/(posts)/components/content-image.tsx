import { motion } from "framer-motion";
import { ContentProps } from "./post-content";
import { ContentControls } from "./content-controls";
import Image from "next/image";

export function ContentImage({
  moveElementUp,
  moveElementDown,
  discardElement,
  setImageSrc,
  setImageAlt,
  src,
  alt,
}: ContentProps) {
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.95 }}
      className="group relative mb-2 aspect-video w-full rounded-3xl border border-white/20 shadow-lg shadow-white/5"
    >
      {src && src.length > 0 && (
        <Image
          alt={alt!}
          src={src}
          fill
          className="absolute inset-0 rounded-3xl object-cover"
        />
      )}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-between gap-2 p-6">
        <input
          onBlur={(e) => {
            if (e.target.value.length !== 0) {
              setImageSrc!(e.target.value);
            }
          }}
          defaultValue={src}
          placeholder="https://link-da-imagem.com"
          className="w-full rounded-lg bg-white/20 px-2 py-1 text-sm outline-none ring-0 backdrop-blur-xl"
        />
        <input
          onBlur={(e) => {
            if (e.target.value.length !== 0) {
              setImageAlt!(e.target.value);
            }
          }}
          defaultValue={alt}
          placeholder="Descrição"
          className="w-full rounded-lg bg-white/20 px-2 py-1 text-sm outline-none ring-0 backdrop-blur-xl"
        />
      </div>
      <ContentControls
        moveElementUp={moveElementUp}
        moveElementDown={moveElementDown}
        discardElement={discardElement}
      />
    </motion.div>
  );
}
