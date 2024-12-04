import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';

const GridDraggable = () => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	// layout is an array of objects, see the demo for more complete usage
	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2 },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 },
		{ i: 'd', x: 5, y: 0, w: 1, h: 2 },
	];

	return (
		<GridLayout
			className="layout grid-draggable"
			layout={layout}
			cols={12}
			rowHeight={200}
			width={3000}
			style={{ backgroundColor: 'green' }}
		>
			<div key="a" style={{ backgroundColor: 'red' }}>
				a
			</div>
			<div key="b" style={{ backgroundColor: 'red' }}>
				b
			</div>
			<div key="c" style={{ backgroundColor: 'red' }}>
				c
			</div>
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
		</GridLayout>
	);
};

export default GridDraggable;
