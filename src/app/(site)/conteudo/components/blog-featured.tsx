import Image from "next/image";

export function BlogFeatured() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-4 grid h-[560px] w-full max-w-5xl grid-cols-3 grid-rows-[7] gap-4">
        <FeaturedPost
          row={7}
          title="Como conseguir a certificação do PBQP-H"
          date={new Date()}
          image="/assets/home/blog/blog0.jpg"
        />
        <FeaturedPost
          row={3}
          title="O que é o ISO 45001?"
          date={new Date()}
          image="/assets/home/blog/blog1.jpg"
        />
        <FeaturedPost
          row={4}
          title="Gestão a distância: Soluções para construção civil"
          date={new Date()}
          image="/assets/home/blog/blog2.jpg"
        />
        <FeaturedPost
          row={4}
          title="Principais desafios na gestão de projetos de construção"
          date={new Date()}
          image="/assets/home/blog/blog3.jpg"
        />
        <FeaturedPost
          row={3}
          title="Inovações tecnológicas na construção civil"
          date={new Date()}
          image="/assets/home/blog/blog4.jpg"
        />
      </div>
    </div>
  );
}

type FeaturedPostProps = {
  row: number;
  title: string;
  date: Date;
  image: string;
};

function FeaturedPost({ row, title, date, image }: FeaturedPostProps) {
  return (
    <div
      style={{ gridRow: `span ${row} / span ${row}` }}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-md duration-200 hover:border-white/60 hover:shadow-xl hover:shadow-white/5"
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
