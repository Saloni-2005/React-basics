import React, { useState } from 'react';  

const Counter = () => {  
  // Initializing counter state  
  const [count, setCount] = useState(0);  
  // State to hold the initial value entered by the user  
  const [initialValue, setInitialValue] = useState('');  

  const handleIncrement = () => {  
    setCount(count + 1);  
  };  

  const handleDecrement = () => {  
    setCount(count - 1);  
  };  

  const handleSetInitialValue = (e) => {  
    e.preventDefault(); 
    const value = parseInt(initialValue, 10);  
    if (!isNaN(value)) {  
      setCount(value); // Set count to the initial value  
    }  
    setInitialValue(''); // Clear the input field  
  };  

  return (  
    <>  
      <h1>Counter: {count}</h1>  
      <form onSubmit={handleSetInitialValue}>  
        <input  
          type="number"  
          value={initialValue}  
          onChange={(e) => setInitialValue(e.target.value)}  
          placeholder="Set initial value"  
        />  
        <button type="submit">Set Initial Value</button>  
      </form>  
      <button onClick={handleIncrement}>Increment</button>  
      <button onClick={handleDecrement}>Decrement</button>  
    </>  
  );  
};  

export default Counter;