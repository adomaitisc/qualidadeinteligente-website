import Image from "next/image";

const NBR = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col md:w-auto w-full items-center justify-center gap-12 bg-blue-900 md:py-24 md:px-24 py-16 px-12 rounded-3xl">
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
        NBR - Norma Brasileira
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        O que é a NBR-15.575.
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Um conjunto normativo, constituído de 6 partes que visa estabelecer
        parâmetros e objetivos que podem ser medidos, objetivando avaliar os
        sistemas construtivos de empreendimentos residenciais.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Por consequência, melhora a qualidade das habitações em consonância com
        o Código de Defesa do Consumidor.
      </p>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
        Envolve toda a cadeia produtiva, desde a incorporação, projeto,
        fabricantes de material, distribuidores e cliente final.
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

export default NBR;
