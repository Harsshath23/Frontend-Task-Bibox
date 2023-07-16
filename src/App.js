import React, { useState } from 'react';
import ProductDescription from './components/ProductDescription';
import PartsSelection from './components/PartsSelection';
import AssemblyArea from './components/AssemblyArea';
import FinalProduct from './components/FinalProduct';
import {Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [assembledParts, setAssembledParts] = useState([]);

  const handleStart = () => {
    setSelectedParts([]);
    setAssembledParts([]);
  };

  const handlePartsSelection = (parts) => {
    setSelectedParts(parts);
  };

  const handlePartAssembled = (part) => {
    setAssembledParts([...assembledParts, part]);
  };

  

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">    
      <Routes>
          <Route path='/' element = {<ProductDescription onStart={handleStart} />}></Route>       
          <Route path="/second" element={<PartsSelection
        selectedParts={selectedParts}
        onPartsSelection={handlePartsSelection}
        onPartAssembled={handlePartAssembled}
      />}></Route>
          <Route path='/third' element = {<AssemblyArea assembledParts={assembledParts} selectedParts={selectedParts} />}></Route>       
          <Route path="/fourth" element={
      <FinalProduct assembledParts={assembledParts} />}></Route>
      </Routes>
    </div>
    </DndProvider>
  );
};

export default App;
