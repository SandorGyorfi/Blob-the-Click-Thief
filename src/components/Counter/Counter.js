import React, { useEffect } from 'react';
import './Counter.css';

function Counter({ count }) {

  useEffect(() => {
    console.log('Inside useEffect');


    return () => {
      console.log('Cleaning up');
    };
  }, [count]);

  console.log('Rendering Counter component');

  return (
    <div className="Counter">
      <div className="Counter-circle" data-testid="counter">      
        {count === null ? '' : count}
      </div>
    </div>
  );
}

export default Counter;