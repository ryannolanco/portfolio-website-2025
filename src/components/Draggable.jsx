import React from 'react';
import '../styles/draggable.css';
import { useState } from 'react';

function Draggable() {
	const items = ['box-1', 'box-2', 'box-3', 'box-4'];
	let [position, setPosition] = useState('');

	function isInViewport(el) {
		const rect = el.getBoundingClientRect();

		let rectObj = {
			top: rect.top,
			left: rect.left,
			bottom: rect.bottom,
			right: rect.right,
		};
		return rectObj;
	}

	const handleDrag = (select) => {
		const box = document.querySelector(select);

		box.addEventListener('mousedown', () => {
			console.log('clicking down');
		});

		let vp = isInViewport(box);
		setPosition(vp);
	};

	return (
		<div>
			<p>{`top: ${position.top}`}</p>
			<p>{`left: ${position.left}`}</p>
			<p>{`bottom: ${position.bottom}`}</p>
			<p>{`right: ${position.right}`}</p>
			<ul draggable-list>
				<li
					draggable="true"
					className={`box box-1`}
					onClick={() => handleDrag('.box-1')}
				>
					box-1
				</li>
				<li
					draggable="true"
					className={`box box-2`}
					onClick={() => handleDrag('.box-2')}
				>
					box-2
				</li>
				<li
					draggable="true"
					className={`box box-3`}
					onClick={() => handleDrag('.box-3')}
				>
					box-3
				</li>
				<li
					draggable="true"
					className={`box box-4`}
					onClick={() => handleDrag('.box-4')}
				>
					box-4
				</li>
			</ul>
		</div>
	);
}

export default Draggable;
