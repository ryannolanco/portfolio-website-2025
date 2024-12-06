import React from 'react';

import headshot from '../imgs/head-shot.png';

function Header() {
	return (
		<header className="header">
			<nav className="navigation">
				<ul className="navigation__container">
					<li>
						<a href="" className="linkedin-link">
							linkedin
						</a>
					</li>
					<li>
						&nbsp;|&nbsp;
						<a href="" className="email-link">
							ryannolanco@gmail.com
						</a>
					</li>
					<li>
						&nbsp;|&nbsp;
						<a href="" className="resume">
							resume
						</a>
					</li>
				</ul>
			</nav>

			<img className="primary-headshot" src={headshot} alt="" />

			<div className="text-container">
				<h1 className="text-container__heading-primary">
					<span className="text-container__heading-primary--main">
						Hello, I'm Ryan Nolan
					</span>
					<span className="text-container__heading-primary--secondary">
						I love creating and building immersive and innovative projects
					</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
