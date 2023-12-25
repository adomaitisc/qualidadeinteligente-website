"use client";

import { Void } from "@/app/(site)/void";
import { NewDetails } from "./components/new-details";
import { useEffect, useState } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { NewContent, NewContentState } from "./components/new-content";
import { NewImage } from "./components/new-image";
import { Send } from "lucide-react";
import { ConfirmationModal } from "./components/confirmation-modal";

export type NewPost = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: Date;
  author: string;
  category: string;
  content: NewContentState;
};

export default function Page() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [postContent, setPostContent] = useState<NewPost>({
    title: "Nova Postagem",
    image: {
      src: "https://source.unsplash.com/random?construction",
      alt: "",
    },
    date: new Date(),
    author: "",
    category: "Categoria",
    content: [],
  });

  function updateContent({
    key,
    value,
  }: {
    key: keyof NewPost;
    value: ValueOf<NewPost>;
  }) {
    setPostContent((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
    if (key === "title") {
      // @ts-ignore
      setPostContent((prev) => {
        return {
          ...prev,
          ["image"]: {
            src: prev.image.src,
            alt: value,
          },
        };
      });
    }
  }

  function getPrunedContent() {
    // remove empty content elements such as images without src and alt, headings without text, etc
    const prunedContent = postContent.content.filter((element) => {
      if (element.key === "image") {
        // @ts-ignore
        return element.value.src.length > 0 && element.value.alt.length > 0;
      } else {
        // @ts-ignore
        return element.value.length > 0;
      }
    });

    const state = postContent;
    state.content = prunedContent;

    return state;
  }

  async function submitPost(userId: string) {
    updateContent({ key: "author", value: userId });

    await fetch("/api/postagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getPrunedContent()),
    }).then((res) => {
      alert(res.status);
    });
  }

  return (
    <main className="mx-auto max-w-5xl text-white">
      <NewImage
        updateContent={updateContent}
        src={postContent.image.src}
        alt={postContent.image.alt}
      />
      {/* Title date and category */}
      <NewDetails
        updateContent={updateContent}
        title="Nova Postagem"
        category="Categoria"
      />
      {/* Content */}
      <NewContent updateContent={updateContent}>
        <button
          onClick={() => {
            setIsConfirmationModalOpen(true);
          }}
          //   disabled={limit >= posts.length}
          className="ml-auto flex items-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-2 text-sm text-black duration-200 hover:bg-transparent hover:text-white disabled:pointer-events-none"
        >
          Postar
          <Send size={16} />
        </button>
      </NewContent>
      <Void gap={36} />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        close={() => setIsConfirmationModalOpen(false)}
        submitPost={submitPost}
      />
    </main>
  );
}
