import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function LogOut() {
  const router = useRouter();
  return (
    <SignOutButton
      signOutCallback={() => {
        router.push("/");
      }}
    >
      Sair
    </SignOutButton>
  );
}
