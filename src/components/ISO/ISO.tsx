import Image from "next/image";

const ISO = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col md:w-auto w-full items-center justify-center gap-12 bg-yellow-900 md:py-24 md:px-24 py-16 px-12 rounded-3xl">
        <Text />
        <Content />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 ml-0 w-full">
      <p className="uppercase font-medium text-base text-yellow-500">
        ISO - International Standardization Organization
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        O que é a ISO 9001.
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        <strong className="text-white">
          Organização Internacional para Padronização
        </strong>
        , do inglês: International Organization for Standardization.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        No Brasil é traduzida e disponibilizada pela ABNT - Associação
        Brasileira de Normas Técnicas, que trata da Gestão da Qualidade em
        <strong className="text-white"> qualquer segmento do mercado.</strong>
      </p>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Como aqui tratamos de construção civil, uma vez certificada no PBQP-H,
        nível A, a empresa construtora pode solicitar na realização de sua
        auditoria, que o Orgão Certificador também inclua a certificação ISO
        9001.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="">
      <Image src="/dna-image.png" width={500} height={390} alt="ISO IMAGE" />
    </div>
  );
};

export default ISO;
