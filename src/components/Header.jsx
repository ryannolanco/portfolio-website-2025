import React from 'react';
import hero from '../imgs/hero.jpg';

function Header() {
	return (
		<div className="header">
			<div className="header__hero-box">
				<img src={hero} alt="black sands beach" className="header__hero" />
			</div>
		</div>
	);
}

export default Header;
