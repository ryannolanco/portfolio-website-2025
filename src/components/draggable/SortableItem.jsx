import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react';

import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, content, invisible, squareImg, double }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const dynamicStyles = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	console.log(transition);
	// const handleMouseEnter = () => {
	// 	setIsHovered(true);
	// };

	// const handleMouseLeave = () => {
	// 	setIsHovered(false);
	// };

	return (
		<div
			ref={setNodeRef}
			className={`draggable ${invisible ? 'draggable--invisible' : ''} ${
				double ? 'draggable--double' : ''
			}`}
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
