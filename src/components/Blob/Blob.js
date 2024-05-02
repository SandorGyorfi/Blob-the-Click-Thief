import React from 'react';
import './Blob.css';
import { ref, set, onValue } from "firebase/database";
import { database } from '../Firebase/FireBase';

function Blob() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const countRef = ref(database, 'clicks/count');
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setCount(data || 0);
    });
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    set(ref(database, 'clicks/count'), newCount);
  };

  return (
    <div className="Blob" onClick={handleClick}>
      <p>Click count: {count}</p>
    </div>
  );
}

export default Blob;
