"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AdminLogOut } from "./admin-logout";

export function AdminHeader() {
  const pathname = usePathname();

  return (
    <div className="fixed left-1/2 top-0 z-50 mx-auto mt-6 -translate-x-1/2 place-items-center font-borna text-white">
      <div className="relative flex items-center gap-2 rounded-xl border border-white/10 p-1.5 text-sm shadow-lg">
        <div className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-neutral-900/20 backdrop-blur-xl" />
        <div className="relative h-[34px] w-[34px]">
          <Image src="/assets/home/qi.png" fill alt="QI" />
        </div>
        <div className="z-10 flex gap-6 px-4">
          <Link
            href="/"
            className="cursor-pointer whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400"
          >
            Página Inicial
          </Link>
          <Link
            href="/admin"
            aria-disabled={pathname === "/admin"}
            className="cursor-pointer whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400"
          >
            Postagens
          </Link>
          <AdminLogOut />
        </div>
        {/* <button className="flex h-full shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-black/10 bg-white px-3 py-1.5 font-borna font-medium text-black backdrop-blur-sm duration-300 hover:border-white/20 hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-white/5">
          Sair <LogOut size={16} />
        </button> */}
      </div>
    </div>
  );
}
