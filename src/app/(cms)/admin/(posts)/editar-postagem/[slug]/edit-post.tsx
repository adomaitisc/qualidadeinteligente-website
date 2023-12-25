"use client";

import { Void } from "@/app/(site)/void";
import { useEffect, useState } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { Save, Send } from "lucide-react";
import { PostContent, PostContentState } from "../../components/post-content";
import { PostImage } from "../../components/post-image";
import { PostDetails } from "../../components/post-details";
import { EditConfirmation } from "../../components/edit-confirmation";
import { NewPostType } from "../../nova-postagem/new-post";
import { useRouter } from "next/navigation";

type EditPostProps = {
  id: number;
  title: string;
  image_src: string;
  image_alt: string;
  date: string;
  author: string;
  category: string;
  content: string;
};

export function EditPost({ post }: { post: EditPostProps }) {
  const router = useRouter();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [postContent, setPostContent] = useState<NewPostType>({
    title: post.title,
    image: {
      src: post.image_src,
      alt: post.image_alt,
    },
    date: new Date(post.date),
    author: post.author,
    category: post.category,
    content: JSON.parse(post.content),
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
    updateContent({ key: "author", value: post.author });

    await fetch(`/api/postagem/${post.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getPrunedContent()),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/admin");
      } else {
        alert("Houve um erro, tente novamente mais tarde.");
      }
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
      <PostContent content={postContent.content} updateContent={updateContent}>
        <button
          onClick={() => {
            setIsConfirmationModalOpen(true);
          }}
          //   disabled={limit >= posts.length}
          className="ml-auto flex items-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-2 text-sm text-black duration-200 hover:bg-transparent hover:text-white disabled:pointer-events-none"
        >
          Salvar Alterações
          <Save size={16} />
        </button>
      </PostContent>
      <Void gap={36} />
      <EditConfirmation
        isOpen={isConfirmationModalOpen}
        close={() => setIsConfirmationModalOpen(false)}
        submitPost={submitPost}
      />
    </main>
  );
}
