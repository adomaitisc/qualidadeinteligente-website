import Image from "next/image";

export function Orgs() {
  return (
    <div className="hidden w-full flex-col items-center md:flex">
      <p className="mb-2 font-borna text-sm text-neutral-700">
        Atuando nas melhores construtoras
      </p>
      <Image
        width={800}
        height={200}
        src="/assets/home/testimonials-vector.svg"
        alt="clientes"
        className="mx-auto"
      />
    </div>
  );
}
