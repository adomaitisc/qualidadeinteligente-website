import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <div className="mx-auto grid w-full max-w-4xl place-items-center">
      <div className="w-full max-w-xl">
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
    </div>
  );
}
