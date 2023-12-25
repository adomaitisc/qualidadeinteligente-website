"use client";

import { ValueOf } from "next/dist/shared/lib/constants";
import { NewPostType } from "../nova-postagem/new-post";

type PostDetailsProps = {
  updateContent: ({
    key,
    value,
  }: {
    key: keyof NewPostType;
    value: ValueOf<NewPostType>;
  }) => void;
  title: string;
  category: string;
  date: Date;
};

export function PostDetails({
  updateContent,
  title,
  category,
  date,
}: PostDetailsProps) {
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
        <p>{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
