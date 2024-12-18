import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

import testImg from "../../imgs/test-img.jpg";

const initialItems = [
  { id: "A", content: "box a", squareImg: testImg, invisible: false },
  { id: "B", content: "This is awesome", invisible: false },
  { id: "C", content: "This is awesome", invisible: false },
  { id: "D", content: "This is awesome", invisible: false },
  { id: "E", content: "", invisible: true },
  { id: "F", content: "", invisible: true },
];



function SortableGrid() {
  const [items, setItems] = useState(initialItems);

  const handleDragOver = (event) => {
    const { active, over } = event;

    if (!over) return; // If there's no item under the dragged item, do nothing

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy} // Change to a grid strategy if needed
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "920px",
              gap: "10px",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                content={item.content}
                invisible={item.invisible}
                squareImg={item.squareImg}
              />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}


export default SortableGrid;
