import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function AdminLogOut() {
  const router = useRouter();
  return (
    <SignOutButton
      signOutCallback={() => {
        router.push("/");
      }}
    >
      <span className="flex cursor-pointer items-center gap-2 whitespace-nowrap duration-150 hover:text-neutral-400 aria-disabled:pointer-events-none aria-disabled:text-neutral-400">
        Sair
        <LogOut size={14} />
      </span>
    </SignOutButton>
  );
}
