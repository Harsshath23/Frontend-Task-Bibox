import React from 'react';
import {Link } from "react-router-dom";
import burger from '../assets/burger.jpg';

const ProductDescription = ({ onStart }) => {
  return (
    
      <center>
        <div>
      <img src={burger} alt="Product"  width={"40%"} height={"40%"}/>
      <h1>Product Description</h1>
      {/* Display textual product description */}
      <p>
      </p>
      <div className="parts-container">
        {/* Display other parts */}
      </div>
      <Link to="/second"><button >Start</button></Link>
    </div>
      </center>
  );
};

export default ProductDescription;
