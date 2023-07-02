import Image from "next/image";

const DNA = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col md:w-auto md:mx-24 w-full items-center justify-center gap-12 bg-blue-900 md:py-24 md:px-24 py-16 px-12 rounded-3xl">
        <Text />
        <Content />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 ml-0 w-full">
      <p className="uppercase font-medium text-base text-blue-500">
        Nossa metodologia
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        O DNA da QI.
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        <strong className="text-white">Exclusividade e experiência!</strong>{" "}
        Atuando somente no segmento da Construção Civil há mais de 20 anos, com
        mais de 100 clientes atendidos, garantindo o resultado positivo de suas
        certificações.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Metodologia sem concorrência! Trabalhamos{" "}
        <strong className="text-white">“com os nossos clientes”</strong> e não
        “para eles”. Trabalhamos em nível operacional, nos responsabilizando
        pela Gestão da Qualidade de nossos clientes.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="">
      <Image src="/dna-image.png" width={500} height={390} alt="DNA IMAGE" />
    </div>
  );
};

export default DNA;
