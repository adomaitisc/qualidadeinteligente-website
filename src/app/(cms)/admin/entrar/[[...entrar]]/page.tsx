"use client";

import { SignIn } from "@clerk/nextjs";

export default function LogIn() {
  return (
    <main className="flex min-h-screen w-full items-center justify-between">
      <div className="mx-auto">
        <SignIn />
      </div>
    </main>
  );
}
