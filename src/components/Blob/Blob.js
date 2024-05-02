import React from 'react';
import './Blob.css';
import Counter from '../Counter/Counter';

function Blob({ onClick, count }) {
  console.log("Rendering Blob component");
  return (
    <div className="Blob" onClick={onClick} data-testid="blob">   
      <Counter count={count} />
    </div>
  );
}

export default Blob;