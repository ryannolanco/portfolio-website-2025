import React from 'react';
import Header from './components/header/Header';
import SortableGrid from './components/sortable/SortableGrid';
import './index.css';
import ProjectCollection from './components/projects/ProjectCollection';
function App() {
	return (
		<div>
			<Header />
			<SortableGrid />
			<ProjectCollection />
		</div>
	);
}

export default App;
