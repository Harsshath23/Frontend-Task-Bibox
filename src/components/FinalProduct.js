

import React from 'react';

const FinalProduct = ({ assembledParts }) => {
  return (
    <div>
      <h2>Final Product</h2>
      {assembledParts.length > 0 ? (
        <div>
          <p>Assembled Parts:</p>
          <div>
            {assembledParts.map((part) => (
              <div key={part.id}>
                <img src={part.image} alt={part.name} width="120px" height="120px" />
                <p>{part.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please assemble the parts to view the final product.</p>
      )}
    </div>
  );
};

export default FinalProduct;
