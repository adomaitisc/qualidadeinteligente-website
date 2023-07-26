"use client";

export function Card({
  title,
  icon,
  body,
}: {
  title: string;
  icon: React.ReactNode;
  body: string;
}) {
  return (
    <a className="group relative cursor-pointer">
      <div className="absolute z-10 p-6 text-white">
        <h2 className="flex items-center gap-2 font-borna text-2xl">
          {title}
          <span className="h-4 w-4 scale-0 duration-300 group-hover:scale-100">
            {icon}
          </span>
        </h2>
        <p className="mt-2 text-zinc-400">{body}</p>
      </div>
      <div
        className={`relative h-72 w-full overflow-hidden border-2 border-zinc-600 group-hover:border-purple-700 ${
          external && "border-purple-700/40 group-hover:border-purple-700"
        } rounded-xl duration-300`}
      ></div>
    </a>
  );
}
