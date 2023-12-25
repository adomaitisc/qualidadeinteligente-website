import Image from "next/image";

type PostHeroProps = {
  src: string;
  alt: string;
};

export function PostHero({ src, alt }: PostHeroProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-b-3xl border-b border-l border-r border-white/20 shadow-lg shadow-white/5">
      <Image
        alt={alt}
        src={src}
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
    </div>
  );
}
