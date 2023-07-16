
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Picture from './Picture';


const AssemblyArea = ({ selectedParts }) => {
  const [assemblyAreaParts, setAssemblyAreaParts] = useState([]);
  const [board, setBoard] = useState([]);

  const vertically = {display:'flex',
                      flexDirection:'column'                    
  }
  
  const handleDrop = (item) => {
    const partId = item.partId;
    const part = selectedParts.find((part) => part.id === parseInt(partId));
    if (part && !assemblyAreaParts.includes(part)) {
      // Handle the dropped part in the assembly area
      const updatedAssemblyArea = [...assemblyAreaParts, part];
      setAssemblyAreaParts(updatedAssemblyArea);
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PART,
    drop: (item) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const isActive = canDrop && isOver;

  const assemblyAreaStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start', // Position the assembly area on the right side from top
    width: '500px', // Set the width of the assembly area as desired
  };

  const handleDragStart = (e, partId) => {
    e.dataTransfer.setData('text/plain', partId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropOnBoard = (e) => {
    e.preventDefault();
    const partId = e.dataTransfer.getData('text/plain');
    addImageToBoard(partId);
  };

  const addImageToBoard = (partId) => {
    const part = selectedParts.find((part) => part.id === parseInt(partId));
    if (part && !board.includes(part)) {
      const updatedBoard = [part, ...board]; // Append the dropped image to the beginning of the board
      setBoard(updatedBoard);
    }
  };

  return (
    <div className="assembly-container" style={{ display: 'flex' }}>
      <div
        className="selected-parts-container"
        style={{
          overflowY: 'scroll',
          maxHeight: 'calc(100vh - 20px)',
          width: '200px',
          marginRight: '20px',
        }}
      >
        <h2>Selected Parts</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {selectedParts.map((part) => (
            <div
              key={part.id}
              className="part-card"
              draggable
              onDragStart={(e) => handleDragStart(e, part.id)}
            >
              <img src={part.image} alt={part.name} width="120px" height="120px" />
              <p>{part.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`assembly-area ${isActive ? 'active' : ''}`}
        style={assemblyAreaStyle}
        onDragOver={handleDragOver}
        onDrop={handleDropOnBoard}
      >
        <h2>Assembly Area</h2>
        <div style={vertically} >
          {board.map((part) => (
            <Picture key={part.id} url={part.image} id={part.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssemblyArea;

