import { cn } from "@/lib/utils";

type BlogHeadingProps = {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  children: React.ReactNode;
};

const sizes = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
};

const bold_cn = "font-semibold";
const italic_cn = "italic";
const underline_cn = "underline";

export default function BlogHeading({
  size = "h1",
  className = "",
  bold = false,
  italic = false,
  underline = false,
  children,
}: BlogHeadingProps) {
  return (
    <h3
      className={cn("text-white", [
        sizes[size],
        bold && bold_cn,
        italic && italic_cn,
        underline && underline_cn,
        className,
      ])}
    >
      {children}
    </h3>
  );
}
