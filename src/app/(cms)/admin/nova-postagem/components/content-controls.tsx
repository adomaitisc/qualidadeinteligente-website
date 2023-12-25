import { ChevronDown, ChevronUp, Delete } from "lucide-react";
import { ContentProps } from "./new-content";

export function ContentControls({
  moveElementUp,
  moveElementDown,
  discardElement,
}: ContentProps) {
  return (
    <div className="absolute right-0 top-0 flex -translate-y-1/2 scale-0 items-center gap-1.5 text-xs text-black duration-100 delay-75 group-hover:scale-100">
      <div
        onClick={moveElementUp}
        className="flex cursor-pointer items-center gap-1 rounded-lg bg-white px-1.5 py-1 text-xs text-black"
      >
        <span className="font-medium">Subir</span>
        <ChevronUp size={18} />
      </div>
      <div
        onClick={moveElementDown}
        className="flex cursor-pointer items-center gap-1 rounded-lg bg-white px-1.5 py-1 text-xs text-black"
      >
        <span className="font-medium">Descer</span>
        <ChevronDown size={18} />
      </div>
      <div
        onClick={discardElement}
        className="flex cursor-pointer items-center gap-1 rounded-lg bg-white px-1.5 py-1 text-xs text-black"
      >
        <span className="font-medium">Deletar</span>
        <Delete size={18} />
      </div>
    </div>
  );
}
