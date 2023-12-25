import { Checkbox } from "@/components/ui/checkbox";
import { Forward } from "lucide-react";

export function Join() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-10 w-full max-w-xl">
        <h2 className="inline-block bg-gradient-to-r from-white/60 to-white bg-clip-text font-borna text-2xl font-medium text-transparent">
          Entre em Contato
        </h2>
        <p className="text- mt-4 text-neutral-300">
          Mande-nos uma mensagem e entraremos em contato com você e sua empresa
          o mais breve possível.
        </p>
      </div>
      <div className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
        <form className=" grid grid-cols-2 gap-4 text-sm text-neutral-700">
          <div className="flex flex-col gap-1">
            <label htmlFor="client_name">Nome</label>
            <input
              placeholder="Seu Nome"
              id="client_name"
              type="text"
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="client_email">Email</label>
            <input
              placeholder="Seu Email"
              id="client_email"
              type="email"
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="company_name">Empresa</label>
            <input
              placeholder="Nome da Empresa"
              id="company_name"
              type="text"
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="company_tax">CNPJ</label>
            <input
              placeholder="CNPJ"
              id="company_tax"
              type="text"
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="message">Mensagem</label>
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              id="message"
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-2 text-neutral-200 placeholder:text-neutral-400"
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Checkbox id="terms" className="border-white/10" />
            <label className="text-neutral-300" htmlFor="terms">
              Aceito os termos de serviço
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            <Checkbox
              defaultChecked={true}
              id="subscribe_newsletter"
              className="border-white/10"
            />
            <label className="text-neutral-300" htmlFor="terms">
              Desejo me inscrever na Newsletter
            </label>
          </div>
          <div className="col-span-2 mt-2 flex w-full flex-col items-start gap-1">
            <button className="mt-auto flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 font-borna text-sm font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/5">
              Entre em contato com nossa Equipe <Forward size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
