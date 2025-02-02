import React from 'react';

import './header.css';
import Navigation from '../navigation/Navigation';

function Header() {
	return (
		<header className="header">
			<Navigation />
			<div className="text-container">
				<h1 className="heading-primary">
					<span className="heading-primary--main">Hello, I'm Ryan Nolan</span>
					<span className="heading-primary--secondary">
						I love creating immersive <br /> and innovative digital projects
					</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
