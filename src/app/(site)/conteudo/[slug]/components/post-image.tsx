import Image from "next/image";

type PostImageProps = {
  src: string;
  alt: string;
};

export function PostImage({ src, alt }: PostImageProps) {
  return (
    <div className="group relative mb-2 aspect-video w-full rounded-3xl border border-white/20 shadow-lg shadow-white/5">
      {src && src.length > 0 && (
        <Image
          alt={alt!}
          src={src}
          fill
          className="absolute inset-0 rounded-3xl object-cover"
        />
      )}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      {/* <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-between gap-2 p-6">
        <input
          onBlur={(e) => {
            if (e.target.value.length !== 0) {
              setImageSrc!(e.target.value);
            }
          }}
          placeholder="https://link-da-imagem.com"
          className="w-full rounded-lg bg-white/20 px-2 py-1 text-sm outline-none ring-0 backdrop-blur-xl"
        />
        <input
          onBlur={(e) => {
            if (e.target.value.length !== 0) {
              setImageAlt!(e.target.value);
            }
          }}
          placeholder="Descrição"
          className="w-full rounded-lg bg-white/20 px-2 py-1 text-sm outline-none ring-0 backdrop-blur-xl"
        />
      </div> */}
    </div>
  );
}
