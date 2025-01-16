import React from 'react';
import './navigation.css';

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__container">
				<li>
					<a href="" className="linkedin-link">
						<span aria-hidden="true">00</span>
						LINKEDIN
					</a>
				</li>
				<li>
					<a href="" className="email-link">
						<span aria-hidden="true">01</span>
						GITHUB
					</a>
				</li>
				<li>
					<a href="" className="resume">
						<span aria-hidden="true">02</span>
						RESUME
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
