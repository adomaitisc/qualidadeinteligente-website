"use client";

export function Card({
  title,
  body,
  external,
}: {
  title: string;
  body: string;
  external?: boolean;
  href: string;
}) {
  return (
    <a className="group relative cursor-pointer">
      <div className="absolute z-10 p-6 text-white">
        <h2 className="flex items-center gap-2 font-borna text-2xl">
          {title}
          {external ? (
            <svg
              className="h-4 w-4 scale-0 duration-300 group-hover:scale-100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4 scale-0 duration-300 group-hover:scale-100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" x2="14" y1="3" y2="10" />
              <line x1="3" x2="10" y1="21" y2="14" />
            </svg>
          )}
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
