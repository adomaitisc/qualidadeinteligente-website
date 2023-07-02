import Image from "next/image";

const PBQPH = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col md:w-auto w-full items-center justify-center gap-12 bg-green-900 md:py-24 md:px-24 py-16 px-12 rounded-3xl">
        <Text />
        <Content />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 ml-0 w-full">
      <p className="uppercase font-medium text-base text-green-500">
        Simplificando sua Certificação
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        O que é o PBQP-H
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Regimento do Governo Federal baseado na ISO 9001, acrescida de{" "}
        <strong className="text-white">
          requisitos específicos para a Construção Civil,
        </strong>{" "}
        adotando o Sistema de Avaliação da Conformidade de Empresas de Serviços
        e Obras (SiAC), buscando contribuir para a melhoria da qualidade do
        setor.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Empresas do setor da Construção Civil que pretendem utilizar algum tipo
        de financiamento federal, tem como uma de suas premissas, obter
        certificação no referido regimento, através de auditorias independentes,
        realizadas por{" "}
        <strong className="text-white">
          Organismos de Certificação credenciadas pelo INMETRO.
        </strong>
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="">
      <Image src="/dna-image.png" width={500} height={390} alt="PBQPH IMAGE" />
    </div>
  );
};

export default PBQPH;
