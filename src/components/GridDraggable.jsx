import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

const GridDraggable = () => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<div className="draggable__container">
			<div
				key="d"
				style={{
					position: 'relative', // Make sure the div itself can be positioned
					zIndex: 10,
				}}
			>
				<div
					style={{
						backgroundColor: 'red',
						transform: hovered ? 'scale(1.2)' : 'scale(1)', // Scale the item on hover
						transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transition
						width: '100%', // Ensure it occupies full space in the grid cell
						height: '100%', // Ensure it occupies full space in the grid cell
					}}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					D
				</div>
			</div>
		</div>
	);
};

export default GridDraggable;
