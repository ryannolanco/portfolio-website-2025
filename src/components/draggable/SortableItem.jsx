import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { useState } from "react";

import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, content, invisible, squareImg }) {
  const [isHovered, setIsHovered] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const dynamicStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={setNodeRef}
      className={invisible ? "draggable--invisible" : "draggable" }
      style={dynamicStyles}
      {...attributes}
      {...listeners}
     
    >
      {squareImg ? (
        <img
          className="draggable draggable--img"
          src={squareImg}
          alt="square image"
        />
      ) : (
        content
      )}
    </div>
  );
}

export default SortableItem;
