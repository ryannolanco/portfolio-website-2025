import React from 'react';

import './header.css';
import Navigation from '../navigation/Navigation';

function Header() {
	return (
		<header className="header">
			<Navigation />
			<div className="text-container">
				<h1 className="text-container__heading-primary">
					<span className="text-container__heading-primary--main">
						Hello, I'm Ryan Nolan
					</span>
					<span className="text-container__heading-primary--secondary">
						I love creating immersive 
						and innovative digital projects
					</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
