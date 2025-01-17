import React from 'react';
import './navigation.css';

const Navigation = () => {
	return (
		<>
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
			>
				<span className="sr-only">Menu</span>
			</button>
			<nav className="navigation">
				<ul id="primary-navigation" className="navigation__container">
					<li>
						<a href="" className="linkedin-link">
							<span className="nav-span" aria-hidden="true">
								00
							</span>
							LINKEDIN
						</a>
					</li>
					<li>
						<a href="" className="email-link">
							<span className="nav-span" aria-hidden="true">
								01
							</span>
							GITHUB
						</a>
					</li>
					<li>
						<a href="" className="resume">
							<span className="nav-span" aria-hidden="true">
								02
							</span>
							RESUME
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
