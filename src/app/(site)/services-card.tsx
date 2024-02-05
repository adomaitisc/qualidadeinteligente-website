import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  altText: string;
  description: string;
};

export function ServiceCard({
  title,
  subtitle,
  imageSrc,
  altText,
  description,
}: ServiceCardProps) {
  return (
    <div
      id="card"
      className="relative flex flex-col items-end rounded-xl bg-white/10 shadow-lg duration-300 ease-in-out"
    >
      <div id="card-border" />
      <div
        id="card-content"
        style={{
          height: "calc(100% - 2px)",
          width: "calc(100% - 2px)",
        }}
        className="relative m-[1px] rounded-[11px] bg-[#0A0A0A] p-2"
      >
        <div className="relative mx-auto aspect-video w-3/4">
          <Image src={imageSrc} className="object-fit" fill alt={altText} />
        </div>
        <div className="flex flex-col justify-end p-7 text-neutral-200">
          <h3 className="flex items-center gap-2 font-borna text-base font-medium">
            {title} {subtitle && <span className="text-sm">{subtitle}</span>}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
