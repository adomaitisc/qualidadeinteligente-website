"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Plus, PlusSquare, Search } from "lucide-react";
import Link from "next/link";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex gap-2 pb-4">
        <div className="relative w-full max-w-sm">
          <input
            placeholder="Filtrar por título..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="peer w-full rounded-xl border border-white/5 bg-neutral-900 px-4 py-2 text-sm font-normal text-neutral-200 ring-0 transition-colors duration-150 focus:border-white/40 focus:outline-none focus:ring-0"
          />
          <Search
            size={16}
            className=" pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform text-white opacity-50 duration-200 peer-focus:scale-0"
          />
        </div>
        <Link
          href="/admin/nova-postagem"
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm duration-200 hover:bg-white hover:text-black disabled:pointer-events-none"
        >
          Nova Postagem
          <Plus size={14} />
        </Link>
      </div>
      <div className="w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-white/5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="border-b-white/10 bg-neutral-900 p-0 font-normal text-neutral-200 hover:bg-neutral-900"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="h-auto py-2 font-normal text-neutral-200"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="text-normal border-b-white/10 transition-colors duration-150 hover:bg-neutral-800"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Nenhum resultado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
