"use client";

import { Void } from "@/app/(site)/void";
import { PostDetails } from "../components/post-details";
import { useEffect, useState } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { PostContent, PostContentState } from "../components/post-content";
import { PostImage } from "../components/post-image";
import { Send } from "lucide-react";
import { NewConfirmation } from "../components/new-confirmation";

export type NewPostType = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: Date;
  author: string;
  category: string;
  content: PostContentState;
};

export function NewPost({ author }: { author: string }) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [postContent, setPostContent] = useState<NewPostType>({
    title: "Nova Postagem",
    image: {
      src: "https://source.unsplash.com/random?construction",
      alt: "",
    },
    date: new Date(),
    author: author,
    category: "Categoria",
    content: [],
  });

  function updateContent({
    key,
    value,
  }: {
    key: keyof NewPostType;
    value: ValueOf<NewPostType>;
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

  async function submitPost() {
    updateContent({ key: "author", value: author });

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
      <PostImage
        updateContent={updateContent}
        src={postContent.image.src}
        alt={postContent.image.alt}
      />
      {/* Title date and category */}
      <PostDetails
        updateContent={updateContent}
        title={postContent.title}
        category={postContent.category}
        date={postContent.date}
      />
      {/* Content */}
      <PostContent updateContent={updateContent}>
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
      </PostContent>
      <Void gap={36} />
      <NewConfirmation
        isOpen={isConfirmationModalOpen}
        close={() => setIsConfirmationModalOpen(false)}
        submitPost={submitPost}
      />
    </main>
  );
}
