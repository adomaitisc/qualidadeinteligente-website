import { motion } from "framer-motion";
import { ContentProps } from "./new-content";
import TextareaAutosize from "react-textarea-autosize";
import { ContentControls } from "./content-controls";

export function ContentParagraph({
  moveElementUp,
  moveElementDown,
  discardElement,
  setElementText,
}: ContentProps) {
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.95 }}
      className="group relative w-full"
    >
      <TextareaAutosize
        onBlur={(e) => {
          if (e.target.value.length === 0) {
            discardElement();
          }
        }}
        placeholder="Texto"
        onChange={(e) => setElementText!(e.target.value)}
        className="w-full resize-none rounded-md bg-transparent p-0  outline-none ring-0 focus:animate-pulse focus:bg-white/5 focus:outline-none focus:ring-0 group-hover:bg-white/5"
      />
      <ContentControls
        moveElementUp={moveElementUp}
        moveElementDown={moveElementDown}
        discardElement={discardElement}
      />
    </motion.div>
  );
}
