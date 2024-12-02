import React from "react";
import { useState } from "react";

function Draggable() {

 
  const handleDragStart = (e) => {
		e.target.style.opacity = '0.4';
  };

	const handleDragEnd = (e) => {
    e.target.style.opacity = '1'; // Reset opacity when drag ends
  };


  return (
    <div className="draggable">
      <div class="draggable__container">
        <div draggable="true" className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          A
        </div>
        <div draggable="true" className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          B
        </div>
        <div        
          className="draggable__box draggable__box--invisible"
        ></div>
        <div draggable className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          A
        </div>
        <div draggable className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          B
        </div>
        <div
     
          className="draggable__box draggable__box--invisible"
        ></div>
        <div
      
          className="draggable__box draggable__box--invisible"
        ></div>
        <div draggable className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          B
        </div>
        <div draggable className="draggable__box" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          C
        </div>
      </div>
    </div>
  );
}

export default Draggable;
