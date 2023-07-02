import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:h-[700px] h-[400px] w-full flex flex-col justify-center items-center">
      <Text />
    </section>
  );
};

const Text = () => {
  return (
    <div className="text-center overflow-hidden relative flex p-20 justify-between  w-full h-full rounded-[2.5rem]">
      <Image
        src="/landing-background.svg"
        alt="bg"
        layout="fill"
        className="h-full w-full object-cover z-0"
      />
      <div className="my-auto w-2/3 z-10">
        <h1 className="text-left font-medium text-7xl text-white">
          Simplifique a gestão da sua Qualidade
        </h1>
        <div className="mt-6"></div>
        <p className="md:text-xl text-lg font-light text-left mr-20 text-zinc-300">
          Provemos soluções customizadas para melhorar a qualidade e agilizar o
          processo de certificação da sua empresa.
        </p>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Hero;
