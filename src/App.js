import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { increment, decrement, reset, incrementbyamount } from "./CounterSlice";

function App() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const incrementCounter = () => {
    dispatch(increment());
  };
  const handleIncrement = () => {
    dispatch(incrementbyamount(parseInt(incrementAmount, 10)));
    setIncrementAmount(0);
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  const resetCounter = () => {
    dispatch(reset());
  };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>

      <button onClick={resetCounter}>reset to 0</button>
      <input
        type='number'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
