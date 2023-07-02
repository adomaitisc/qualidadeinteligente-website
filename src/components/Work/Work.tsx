const Work = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:w-[60%]  items-center justify-center gap-8">
        <Text />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 ml-0 max-w-[80%] self-start">
      <p className=" uppercase font-medium text-base text-zinc-500">
        Por dentro da QI
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold max-w-3xl">
        Como funciona o nosso trabalho.
      </h1>
      <div className="mt-9"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
        Diferente da concorrência, atuamos em nível operacional na implantação
        dos processos. Elaboramos todos os documentos necessários nos clientes
        “a 4 mãos”! Nós fazemos o que tem que ser feito! Desta forma.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
        Além de obtermos um Sistema de Gestão da Qualidade completamente
        adaptado às necessidades dos nossos clientes, diminuímos
        consideravelmente o tempo necessário para o preparo das empresas para as
        certificações.{" "}
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Garantimos o resultado positivo no prazo combinado!
        </strong>
      </p>
    </div>
  );
};

export default Work;
