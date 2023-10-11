import Image from "next/image";

export function Header() {
  return (
    <div className=" font-borna fixed left-1/2 top-0 z-50 mx-auto mt-6 grid w-full -translate-x-1/2 place-items-center text-white">
      <div className="flex items-center gap-8 rounded-xl border border-white/10 bg-neutral-900/20 p-1 text-sm backdrop-blur-xl">
        <Image
          src="/assets/home/qi.png"
          width={40}
          height={40}
          className="h-10 w-10"
          alt="QI"
        />
        <p>Soluções</p>
        <p>Sobre nós</p>
        <p>Blog</p>
        <button className="font-borna mr-0.5 h-full rounded-lg border border-black/10 bg-white px-3 py-1.5 font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/20">
          Certifique-se agora
        </button>
      </div>
    </div>
  );
}
