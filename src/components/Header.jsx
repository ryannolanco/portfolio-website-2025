import React from "react";

import headshot from "../imgs/head-shot.png"

function Header() {
  return (
    <header className="header">
      <div className="header__text-container">
        <nav className="navigation">
          <div className="navigation__navigation-container">
            <a href="" className="linkedin-link">
              linkedin
            </a>{" "}
            |&nbsp;
            <a href="" className="email-link">
              ryannolanco@gmail.com
            </a>{" "}
            |&nbsp;
            <a href="" className="resume">
              resume
            </a>
          </div>
        </nav>

        <h1 className="heading-primary">
					<img className="heading-primary__headshot"src={headshot} alt="" />
          <span className="heading-primary--main">Hello, I'm Ryan Nolan</span>
          <span className="heading-primary--secondary">
            I love creating and building immersive and innovative projects
          </span>
        </h1>
      </div>

    </header>
		
  );
}

export default Header;
