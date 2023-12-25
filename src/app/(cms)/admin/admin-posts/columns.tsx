"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ExternalLink, MoreHorizontal, PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Post = {
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
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "author",
    header: "Escritor",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ExternalLink
              size={16}
              className="cursor-pointer rounded-md text-white hover:text-white/80"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="left"
            className="flex flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900/20 p-2 text-white backdrop-blur-3xl"
          >
            <DropdownMenuItem
              className="cursor-pointer rounded-md hover:bg-black/40"
              onClick={() => navigator.clipboard.writeText(post.title)}
            >
              Copiar Link
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md hover:bg-black/40">
              Editar Postagem
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
