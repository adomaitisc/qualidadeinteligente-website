"use client";

import { Loader, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { website_PostType } from "@/app/db";

export function BlogList({ posts }: { posts: website_PostType[] }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid min-h-full w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {posts.map((post) => {
          // if (index >= limit) return;
          return (
            <Link
              href={`/conteudo/${post.slug}`}
              key={post.id}
              className="group relative flex cursor-pointer flex-col gap-1"
            >
              <p className="text-sm text-neutral-500">{post.category}</p>
              <h1 className="text-xl font-medium duration-200 group-hover:underline">
                {post.title}
              </h1>
              <p className="text-sm text-neutral-500">
                {new Date(post.date).toLocaleDateString()} por {post.author}
              </p>
            </Link>
          );
        })}
      </div>
      {/* <div className="mt-12 flex w-full max-w-5xl items-center justify-center">
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              loadMore();
            }, 2000);
          }}
          disabled={limit >= posts.length}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
        >
          {limit >= posts.length ? "Você chegou ao fim" : "Carregar Mais"}
          {limit >= posts.length ? null : (
            <>
              {loading ? (
                <Loader className="animate-spin" size={16} />
              ) : (
                <Plus size={16} />
              )}
            </>
          )}
        </button>
      </div> */}
    </div>
  );
}
