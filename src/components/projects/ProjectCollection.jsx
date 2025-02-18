import React from 'react';
import './projectsCollection.css';
import placeholder from '../../assets/placeholder.jpg';

const ProjectCollection = () => {
	return (
		<div className="projects-container">
			<div className="projects-item">
				<img
					className="projects-img projects-item-overlap-left"
					src={placeholder}
				/>
			</div>
			<div className="projects-item">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
					deserunt pariatur vel aut dolores odio magni. Maxime nobis ab quia
					consequatur obcaecati enim perspiciatis ad?
				</p>
			</div>
			<div className="projects-item">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					quasi explicabo nulla voluptatum est, doloribus eligendi id
					reiciendis, nostrum, exercitationem eos laboriosam repellat voluptates
					laudantium quos aspernatur ratione dolorem neque.
				</p>
			</div>
			<div className="projects-item">
				<img
					className="projects-img projects-item-overlap-right"
					src={placeholder}
				/>
			</div>
		</div>
	);
};

export default ProjectCollection;
