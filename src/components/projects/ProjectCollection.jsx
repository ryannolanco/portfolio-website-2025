import React from 'react';
import './projectsCollection.css';
import placeholder from '../../assets/placeholder.jpg';

const ProjectCollection = () => {
	return (
		<div className="projects-container">
			<div className="projects-item">
				<img className="projects-img " src={placeholder} />
			</div>
			<div className="projects-item">
				<h3>Project 1</h3>
				<ul>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem dolor sit amet consectetur.</li>
					<li>Lorem ipsum amet consectetur.</li>
				</ul>
			</div>
			<div className="projects-item">
				<h3>Project 2</h3>
				<ul>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem dolor sit amet consectetur.</li>
					<li>Lorem ipsum amet consectetur.</li>
				</ul>
			</div>
			<div className="projects-item">
				<img className="projects-img " src={placeholder} />
			</div>
		</div>
	);
};

export default ProjectCollection;
