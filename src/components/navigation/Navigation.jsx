import React, { useRef } from 'react';
import './navigation.css';

const Navigation = () => {
	const navRef = useRef(null); // Reference for the <ul> element
	const navToggleRef = useRef(null); // Reference for the toggle button

	const handleToggle = () => {
		const nav = navRef.current;
		const navToggle = navToggleRef.current;

		if (nav && navToggle) {
			const visibility = nav.getAttribute('data-visible');
			if (visibility === 'false') {
				nav.setAttribute('data-visible', true);
				navToggle.setAttribute('aria-expanded', true);
			} else {
				nav.setAttribute('data-visible', false);
				navToggle.setAttribute('aria-expanded', false);
			}
			console.log(visibility);
		}
	};

	return (
		<>
			<button
				ref={navToggleRef}
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
				onClick={handleToggle}
			>
				<span className="sr-only">Menu</span>
			</button>
			<nav className="navigation">
				<ul
					ref={navRef}
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
