import {
  FiUserPlus,
  FiShield,
  FiZap,
  FiLayers,
  FiTrendingUp,
  FiPercent,
} from "react-icons/fi";

const Pros = () => {
  return (
    <section className="md:h-[700px] w-screen flex justify-center items-center">
      <div className="md:w-[60%] w-[80%] flex flex-col justify-start">
        <Text />
        <div className="mt-9"></div>
        <Content />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="">
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold max-w-3xl">
        Benefícios de um Sistema de Gestão.
      </h1>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start md:gap-12 gap-6">
      <div className="flex md:flex-row flex-col md:gap-4 gap-6">
        <ProItem title="Satisfação dos Clientes">
          <FiUserPlus />
        </ProItem>
        <ProItem title="Credibilidade da Marca">
          <FiShield />
        </ProItem>
      </div>
      <div className="flex md:flex-row flex-col md:gap-4 gap-6">
        <ProItem title="Organização Interna">
          <FiLayers />
        </ProItem>
        <ProItem title="Melhoria de Desempenho">
          <FiTrendingUp />
        </ProItem>
      </div>
      <div className="flex md:flex-row flex-col md:gap-4 gap-6">
        <ProItem title="Redução de Custos">
          <FiPercent />
        </ProItem>
        <ProItem title="Colaboradores motivados">
          <FiZap />
        </ProItem>
      </div>
    </div>
  );
};

type ProItem = {
  title: string;
  children: React.ReactNode;
};

const ProItem = ({ title, children }: ProItem) => {
  return (
    <div className="flex flex-row w-80 items-center justify-start gap-4 text-lg text-zinc-300 rounded-lg duration-100 hover:scale-105 hover:text-zinc-100">
      <div>{children}</div>
      <h1>{title}</h1>
    </div>
  );
};

export default Pros;
