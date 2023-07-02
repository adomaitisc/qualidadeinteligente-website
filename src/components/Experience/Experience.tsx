const DNA = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:w-[60%] items-center justify-center gap-8">
        <Text />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 ml-0 max-w-[80%] self-start">
      <p className=" uppercase font-medium text-base text-zinc-500">
        Responsabilidade e Experiência
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold max-w-3xl">
        Mais de 20 anos no mercado.
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
        Nossa história inicia-se no ano 2.000. Foi o primeiro contato com
        sistemas de gestão da qualidade.{" "}
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Começamos com 1 cliente e fechamos o ano com apenas 2.
        </strong>{" "}
        É importante falarmos sobre esse início, pois nesse momento “enxergamos”
        uma grande porta se abrindo.
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
        Mais de 20 anos se passaram e a gente continuou crescendo!{" "}
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Hoje são mais de 50 clientes assistidos por nós.
        </strong>{" "}
      </p>
      <div className="mt-4"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
        Formamos ao longo do tempo, uma equipe “dos sonhos” pra qualquer
        empresa. Entregamos resultados para todos os clientes que nos contratam.
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Com premissas inegociáveis: relacionamento, eficiência, técnica e
          resultado!
        </strong>
      </p>
    </div>
  );
};

export default DNA;
