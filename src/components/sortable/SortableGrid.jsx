import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import './sortable.css';
import './draggable.css';

import DraggableItem from './DraggableItem';
import draggableItems from './draggable-items-array';

function SortableGrid() {
	const [items, setItems] = useState(draggableItems);

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
			className="dnd-context"
		>
			<SortableContext
				items={items}
				strategy={verticalListSortingStrategy} // Change to a grid strategy if needed
			>
				<div className="sortable-grid">
					<div className="sortable-grid__container">
						{items.map((item) => (
							<DraggableItem
								key={item.id}
								id={item.id}
								content={item.content}
								invisible={item.invisible}
								squareImg={item.squareImg}
								double={item.double}
							/>
						))}
					</div>
				</div>
			</SortableContext>
		</DndContext>
	);
}

export default SortableGrid;
