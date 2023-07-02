import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="flex flex-col my-6 justify-center items-center">
      <Content />
    </section>
  );
};

const Content = () => {
  return (
    <>
      <Image src="/clients.png" height={87} width={848} alt="DNA IMAGE" />
    </>
  );
};

export default Testimonials;
