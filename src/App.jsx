import React from 'react';
import Header from './components/Header';
import DraggableComponent from './components/DraggableComponent';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
	return (
		<>
			<Header />
			<DraggableComponent />
		</>
	);
}

export default App;
