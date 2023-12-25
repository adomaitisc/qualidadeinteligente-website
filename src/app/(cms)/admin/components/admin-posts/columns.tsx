"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DeleteConfirmation } from "../delete-confirmation";

export type Post = {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <div>
          <span className="rounded-full border border-white/10 bg-neutral-900/50 px-2 py-0.5 text-neutral-300">
            {post.category}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "author",
    header: "Autor",
  },
  {
    accessorKey: "views",
    header: "Visitas",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
        useState(false);
      const post = row.original;
      const router = useRouter();

      function deletePost() {
        fetch(`/api/postagem/${post.id}`, {
          method: "DELETE",
        }).then(() => {
          router.refresh();
        });
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreVertical
                size={16}
                className="cursor-pointer rounded-md text-white hover:text-white/80"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="bottom"
              className="flex flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900/20 p-2 text-white backdrop-blur-3xl"
            >
              <DropdownMenuItem
                className="cursor-pointer rounded-md hover:bg-black/40"
                asChild
              >
                <Link href={`/conteudo/${post.slug}`} target="_blank">
                  Abrir
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer rounded-md hover:bg-black/40"
                onClick={() =>
                  navigator.clipboard.writeText(
                    window.location.origin + "/conteudo/" + post.slug
                  )
                }
              >
                Copiar Link
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-md hover:bg-black/40"
              >
                <Link href={`admin/editar-postagem/${post.slug}`}>Editar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setIsConfirmationModalOpen(true);
                }}
                className="cursor-pointer rounded-md hover:bg-black/40"
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteConfirmation
            isOpen={isConfirmationModalOpen}
            close={() => setIsConfirmationModalOpen(false)}
            deletePost={deletePost}
          />
        </>
      );
    },
  },
];
