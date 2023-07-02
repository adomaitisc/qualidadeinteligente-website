const About = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col md:items-start items-center justify-center gap-16">
        <Text />
        <Content />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <ul className="flex flex-col md:w-72 max-w-[90%] gap-8">
      <Item
        short="Garantia"
        info="100%"
        description="de Resultados Garantidos"
        flex="start"
      />
      <Item
        short="Conclusão"
        info="+80"
        description="Construtoras Certificadas"
        flex="end"
      />
      <Item
        short="Experiência"
        info="+500"
        description="Auditorias Concluídas"
        flex="start"
      />
    </ul>
  );
};

type ItemProps = {
  short: string;
  info: string;
  description: string;
  flex: "start" | "end";
};

const Item = ({ short, info, description, flex }: ItemProps) => {
  return (
    <li
      className={`${
        flex === `start` ? `md:self-start` : `md:self-end`
      } duration-100 group hover:scale-105`}
    >
      <p className=" uppercase font-medium md:text-base text-lg text-zinc-700 duration-300 group-hover:text-zinc-300">
        {short}
      </p>
      <div className="mt-1"></div>
      <h1 className="md:text-6xl text-5xl text-zinc-100 font-bold duration-300 group-hover:text-blue-400">
        {info}
      </h1>
      <div className="mt-1"></div>
      <p className="md:text-sm text-xl font-light text-zinc-500 duration-300 group-hover:text-zinc-300">
        {description}
      </p>
    </li>
  );
};

const Text = () => {
  return (
    <div className="max-w-[80%]">
      <p className=" uppercase font-medium text-base text-zinc-500">
        Entendendo a nossa empresa
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        Qualidade Inteligente.
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="text-xl max-w-md text-zinc-300 font-light leading-relaxed">
        Somos uma empresa com uma
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          {" "}
          metodologia diferenciada,
        </strong>{" "}
        proporcionando Sistemas de Gestão completamente adaptados aos nossos
        clientes.
        <br />
        <br />
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Reduzimos consideravelmente os prazos de implantação
        </strong>{" "}
        para as certificações, tornando este processo bem simplificado.
      </p>
    </div>
  );
};

export default About;
