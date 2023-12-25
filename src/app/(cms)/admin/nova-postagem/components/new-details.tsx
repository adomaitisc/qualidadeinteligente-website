"use client";

import { ValueOf } from "next/dist/shared/lib/constants";
import { NewPost } from "../page";

type NewDetailsProps = {
  updateContent: ({
    key,
    value,
  }: {
    key: keyof NewPost;
    value: ValueOf<NewPost>;
  }) => void;
  title: string;
  category: string;
};

export function NewDetails({
  updateContent,
  title,
  category,
}: NewDetailsProps) {
  return (
    <div className="mx-auto mt-16 max-w-4xl border-b-[0.5px] border-white/20 pb-4">
      <input
        placeholder={category}
        onChange={(e) => {
          updateContent({ key: "category", value: e.target.value });
        }}
        className="w-full rounded-md bg-transparent text-neutral-400 outline-none ring-0 duration-1000 focus:animate-pulse focus:bg-white/5 focus:outline-none focus:ring-0"
      />
      <input
        onChange={(e) => {
          updateContent({ key: "title", value: e.target.value });
        }}
        placeholder={title}
        contentEditable
        className="w-full rounded-md bg-transparent text-2xl font-medium outline-none ring-0 duration-1000 focus:animate-pulse focus:bg-white/5 focus:outline-none focus:ring-0"
      />
      <div className="mt-2 flex gap-1 text-neutral-500">
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
