import Image from "next/image";
import { ValueOf } from "next/dist/shared/lib/constants";
import { NewPostType } from "../nova-postagem/new-post";

type PostImageProps = {
  updateContent: ({
    key,
    value,
  }: {
    key: keyof NewPostType;
    value: ValueOf<NewPostType>;
  }) => void;
  src: string;
  alt: string;
};

export function PostImage({ updateContent, src, alt }: PostImageProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-b-3xl border-b border-l border-r border-white/20 shadow-lg shadow-white/5">
      {src.length > 0 && (
        <Image
          alt={alt}
          src={src}
          fill
          className="absolute inset-0 object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-6">
        <input
          onBlur={(e) => {
            if (e.target.value.length !== 0) {
              updateContent({
                key: "image",
                value: {
                  src: e.target.value,
                  alt: alt,
                },
              });
            }
          }}
          placeholder="https://link-da-imagem.com"
          defaultValue={src}
          className="w-full rounded-lg bg-white/20 px-2 py-1 text-sm outline-none ring-0 backdrop-blur-xl"
        />
      </div>
    </div>
  );
}
