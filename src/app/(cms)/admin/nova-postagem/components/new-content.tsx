"use client";

import { ValueOf } from "next/dist/shared/lib/constants";
import { NewPost } from "../page";
import { useEffect, useRef, useState } from "react";
import { Image, Send, Text, Type } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ContentHeading } from "./content-heading";
import { ContentParagraph } from "./content-paragraph";
import { ContentImage } from "./content-image";

type NewContentProps = {
  children: React.ReactNode;
  updateContent: ({
    key,
    value,
  }: {
    key: keyof NewPost;
    value: ValueOf<NewPost>;
  }) => void;
};

export type ContentState = {
  heading: string;
  paragraph: string;
  image: {
    src: string;
    alt: string;
  };
};

function generateUniqueId() {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);
  return timestamp + randomString;
}

export type NewContentState = {
  id: string;
  key: keyof ContentState;
  value: ValueOf<ContentState>;
}[];

export function NewContent({ children, updateContent }: NewContentProps) {
  const [contentState, setContentState] = useState<NewContentState>([]);

  function addHeading() {
    setContentState((prev) => [
      ...prev,
      { id: generateUniqueId(), key: "heading", value: "" },
    ]);
  }

  function addParagraph() {
    setContentState((prev) => [
      ...prev,
      { id: generateUniqueId(), key: "paragraph", value: "" },
    ]);
  }

  function addImage() {
    setContentState((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        key: "image",
        value: {
          src: "",
          alt: "",
        },
      },
    ]);
  }

  function removeElement(index: number) {
    setContentState((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  }

  function moveElementUp(index: number) {
    moveElementUpDown(index, -1);
  }

  function moveElementDown(index: number) {
    moveElementUpDown(index, 1);
  }

  function moveElementUpDown(index: number, direction: number) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex > contentState.length - 1) {
      return;
    }
    const currentItem = contentState[index];
    const swapItem = contentState[newIndex];

    setContentState((prev) => {
      const newState = [...prev];
      newState[index] = swapItem;
      newState[newIndex] = currentItem;
      return newState;
    });
  }

  function setElementText(index: number, value: string) {
    setContentState((prev) => {
      const newState = [...prev];
      newState[index].value = value;
      return newState;
    });
  }

  function setImageSrc(index: number, value: string) {
    setContentState((prev) => {
      const newState = [...prev];
      newState[index].value = {
        // @ts-ignore
        ...newState[index].value,
        src: value,
      };
      return newState;
    });
  }

  function setImageAlt(index: number, value: string) {
    setContentState((prev) => {
      const newState = [...prev];
      newState[index].value = {
        // @ts-ignore
        ...newState[index].value,
        alt: value,
      };
      return newState;
    });
  }

  useEffect(() => {
    updateContent({ key: "content", value: contentState });
  }, [contentState]);

  return (
    <div className="mx-auto mt-4 max-w-4xl text-lg text-neutral-200">
      <div className="w-full flex-col gap-4">
        <AnimatePresence>
          {contentState.map((content, index) => {
            if (content.key === "heading") {
              return (
                <ContentHeading
                  key={content.id}
                  moveElementUp={() => moveElementUp(index)}
                  moveElementDown={() => moveElementDown(index)}
                  discardElement={() => removeElement(index)}
                  setElementText={(value) => setElementText(index, value)}
                >
                  {content.value as string}
                </ContentHeading>
              );
            } else if (content.key === "paragraph") {
              return (
                <ContentParagraph
                  key={index}
                  moveElementUp={() => moveElementUp(index)}
                  moveElementDown={() => moveElementDown(index)}
                  discardElement={() => removeElement(index)}
                  setElementText={(value) => setElementText(index, value)}
                >
                  {content.value as string}
                </ContentParagraph>
              );
            } else if (content.key === "image") {
              return (
                <ContentImage
                  key={index}
                  moveElementUp={() => moveElementUp(index)}
                  moveElementDown={() => moveElementDown(index)}
                  discardElement={() => removeElement(index)}
                  setImageSrc={(value) => setImageSrc(index, value)}
                  setImageAlt={(value) => setImageAlt(index, value)}
                  src={(content.value as ContentState["image"]).src}
                  alt={(content.value as ContentState["image"]).alt}
                />
              );
            }
          })}
        </AnimatePresence>
      </div>
      <div className="mb-10 mt-6 flex w-full max-w-5xl items-center gap-2">
        <button
          onClick={() => {
            addHeading();
          }}
          //   disabled={limit >= posts.length}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
        >
          Título
          <Type size={18} />
        </button>
        <button
          onClick={() => {
            addParagraph();
          }}
          //   disabled={limit >= posts.length}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
        >
          Texto
          <Text size={18} />
        </button>
        <button
          onClick={() => {
            addImage();
          }}
          //   disabled={limit >= posts.length}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
        >
          Imagem
          <Image size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

export type ContentProps = {
  children?: string;
  discardElement: () => void;
  moveElementUp: () => void;
  moveElementDown: () => void;
  setElementText?: (value: string) => void;
  setImageSrc?: (value: string) => void;
  setImageAlt?: (value: string) => void;
  src?: string;
  alt?: string;
};
