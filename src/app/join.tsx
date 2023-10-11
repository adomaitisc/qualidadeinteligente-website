import { Checkbox } from "@/components/ui/checkbox";

export function Join() {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="font-borna text-sm text-neutral-700">
        Faça parte do nosso sucesso
      </p>
      <div className="mt-4 w-full max-w-2xl rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
        <h2>Entre em Contato</h2>
        <p className=" mt-1 text-sm text-neutral-400">
          Mande-nos uma mensagem e entraremos em contato o mais breve possível.
        </p>
        <form className="mt-4 grid grid-cols-2 gap-4 text-sm text-neutral-700">
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
          <div className="flex items-center gap-2 ">
            <Checkbox id="terms" className="border-white/10" />
            <label className="text-neutral-300" htmlFor="terms">
              Aceito os termos de serviço.
            </label>
          </div>
          <div className="col-span-2 mt-4 flex flex-col items-start gap-1">
            <button className="font-borna mt-auto flex items-center justify-between gap-2 whitespace-nowrap rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/20">
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
