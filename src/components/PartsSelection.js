
import React, { useState } from 'react';
import bread from '../assets/bread.jpg';
import bread2 from '../assets/bread2.jpg';
import cheese from '../assets/cheese.jpg';
import green from '../assets/green.jpg';
import meat from '../assets/meat.jpg';
import tomato from '../assets/tomato.jpg';
import { Link } from 'react-router-dom';

const PartsSelection = ({ onPartsSelection, onPartAssembled }) => {
  const [parts] = useState([
    { id: 1, name: 'Part 1', image: bread },
    { id: 2, name: 'Part 2', image: bread2 },
    { id: 3, name: 'Part 3', image: cheese },
    { id: 4, name: 'Part 4', image: green },
    { id: 5, name: 'Part 5', image: meat },
    { id: 6, name: 'Part 6', image: tomato },
  ]);

  const [selectedParts, setSelectedParts] = useState([]);

  const handlePartSelection = (part) => {
    const isSelected = selectedParts.some((selectedPart) => selectedPart.id === part.id);
    if (isSelected) {
      const updatedSelectedParts = selectedParts.filter((selectedPart) => selectedPart.id !== part.id);
      setSelectedParts(updatedSelectedParts);
    } else {
      const updatedSelectedParts = [...selectedParts, part];
      setSelectedParts(updatedSelectedParts);
    }
  };

  const handleCheckboxChange = (part) => {
    const isSelected = selectedParts.some((selectedPart) => selectedPart.id === part.id);
    if (isSelected) {
      const updatedSelectedParts = selectedParts.filter((selectedPart) => selectedPart.id !== part.id);
      setSelectedParts(updatedSelectedParts);
    } else {
      const updatedSelectedParts = [...selectedParts, part];
      setSelectedParts(updatedSelectedParts);
    }
  };

  // Move the onPartsSelection call outside the return statement
  onPartsSelection(selectedParts);

  return (
    <div>
      <h2>Parts Selection</h2>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '80px' }}>
          {parts.map((part) => (
            <div
              key={part.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '200px',
                textAlign: 'center',
              }}
              className={`part-card ${selectedParts.some((selectedPart) => selectedPart.id === part.id) ? 'selected' : ''}`}
              onClick={() => handlePartSelection(part)}
            >
              <label htmlFor={`part-${part.id}`}>
                <input
                  type="checkbox"
                  id={`part-${part.id}`}
                  checked={selectedParts.some((selectedPart) => selectedPart.id === part.id)}
                  onChange={() => handleCheckboxChange(part)}
                />
                <img src={part.image} alt={part.name} width="220px" height="120px" />
              </label>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{part.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/third">
        <button>Start to assembly</button>
      </Link>
    </div>
  );
};

export default PartsSelection;
