import Image from "next/image";

export function Orgs() {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-2 font-borna text-sm text-neutral-700">
        Atuando ativamente melhores construtoras
      </p>
      <Image
        width={800}
        height={200}
        src="/assets/testimonials-vector.svg"
        alt="clientes"
        className="mx-auto"
      />
    </div>
  );
}
