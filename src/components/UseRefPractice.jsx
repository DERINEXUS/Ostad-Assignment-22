import { useRef, useState } from 'react'; // BOTH imports at the top

const UseRefPractice = () => {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState('');

  const handleDisplay = () => {
    setDisplayValue(inputRef.current.value);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Task 3: useRef Practice</h2>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleDisplay} className="btn">Display Value</button>
      <button onClick={handleFocus} className="btn">Focus Input</button>
      <p><strong>Value:</strong> {displayValue}</p>
    </div>
  );
};

export default UseRefPractice;