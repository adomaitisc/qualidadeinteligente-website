import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogFeatured } from "./conteudo/components/blog-featured";

// BLOG MUST NOT BE USED AS IT IS NOT A THING YET

export function Blog() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Title */}
      <div className="mb-10 w-full max-w-xl px-3 md:p-0">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Postagens Recentes
        </h2>
        <p className=" mt-4 text-neutral-300">
          Descubra informações e artigos atualizados no nosso blog, cobrindo uma
          variedade de tópicos relevantes.
        </p>
        <div className="mt-8 flex w-full justify-end">
          <Link
            href="/conteudo"
            className="flex items-center gap-1 rounded-xl border border-white/10 px-4 py-3 text-sm duration-200 hover:bg-white hover:text-black"
          >
            Veja nosso conteúdo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <BlogFeatured />
    </div>
  );
}
