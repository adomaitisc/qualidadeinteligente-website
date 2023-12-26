type PostDetailsProps = {
  title: string;
  date: Date;
  category: string;
  author: string;
};

export function PostDetails({
  title,
  date,
  category,
  author,
}: PostDetailsProps) {
  return (
    <div className="mx-auto mt-16 max-w-4xl border-b-[0.5px] border-white/20 px-3 pb-4 md:px-0">
      <p className="text-neutral-500">{category}</p>
      <h1 className="text-2xl font-medium duration-200 group-hover:underline">
        {title}
      </h1>
      <div className="mt-2 flex  gap-1 text-neutral-500">
        <p>
          {date.toLocaleDateString()} por {author}
        </p>
      </div>
    </div>
  );
}
