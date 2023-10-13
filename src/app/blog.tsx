import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Title */}
      <div className="mb-10 w-full max-w-xl">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Postagens Recentes
        </h2>
        <p className=" mt-4 text-neutral-300">
          Descubra informações e artigos atualizados no nosso blog, cobrindo uma
          variedade de tópicos relevantes.
        </p>
        <div className="mt-8 flex w-full justify-end">
          <Link
            href="/blog"
            className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black"
          >
            Veja todas as publicações <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="grid h-[560px] w-full max-w-5xl grid-cols-3 grid-rows-[7] gap-4">
        <Post
          row={7}
          title="Como conseguir a certificação do PBQP-H"
          date={new Date()}
          image="/assets/home/blog/blog0.jpg"
        />
        <Post
          row={3}
          title="O que é o ISO 45001?"
          date={new Date()}
          image="/assets/home/blog/blog1.jpg"
        />
        <Post
          row={4}
          title="Gestão a distância: Soluções para construção civil"
          date={new Date()}
          image="/assets/home/blog/blog2.jpg"
        />
        <Post
          row={4}
          title="Principais desafios na gestão de projetos de construção"
          date={new Date()}
          image="/assets/home/blog/blog3.jpg"
        />
        <Post
          row={3}
          title="Inovações tecnológicas na construção civil"
          date={new Date()}
          image="/assets/home/blog/blog4.jpg"
        />
      </div>
      <Form />
    </div>
  );
}

type PostProps = {
  row: number;
  title: string;
  date: Date;
  image: string;
};

function Post({ row, title, date, image }: PostProps) {
  return (
    <div
      style={{ gridRow: `span ${row} / span ${row}` }}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-md"
    >
      <Image
        src={image}
        fill
        className="object-cover duration-500 group-hover:scale-105"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 duration-300 group-hover:opacity-80" />
      <div className="absolute inset-0">
        <div className="flex h-full flex-col justify-end p-4">
          <h3 className="font-borna text-lg font-medium text-white">{title}</h3>
          <p className="mt-1 text-xs font-medium text-neutral-500">
            {date.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <>
      <div className="mt-32 w-full max-w-xl">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Inscreva-se na nossa Newsletter
        </h2>
        <p className=" mt-4 text-neutral-300">
          Pequenas doses de conhecimento do nosso blog para você e sua empresa.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <div className="mt-8 flex w-full gap-2 rounded-xl border border-white/10 bg-[#0A0A0A] p-2 text-sm">
          <input
            placeholder="Seu Melhor Email"
            id="newsletter_email"
            type="email"
            className="flex-1 rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
          />
          <button className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black">
            Inscreva-se <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
