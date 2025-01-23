import React from 'react';
import './navigation.css';

const Navigation = () => {
	return (
		<>
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
				onClick={() => {
					const nav = document.getElementById('primary-navigation'); // Access the <ul> element
					const visibility = nav.getAttribute('data-visible');

					if (visibility === 'false') {
						nav.setAttribute('data-visible', 'true');
					} else {
						nav.setAttribute('data-visible', 'false');
					}
					console.log(visibility);
				}}
			>
				<span className="sr-only">Menu</span>
			</button>
			<nav className="navigation">
				<ul
					data-visible="false"
					id="primary-navigation"
					className="primary-navigation"
				>
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
