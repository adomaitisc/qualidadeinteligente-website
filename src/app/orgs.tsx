import Image from "next/image";

export function Orgs() {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="font-borna mb-2 text-sm text-neutral-700">
        Atuando ativamente melhores construtoras
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
