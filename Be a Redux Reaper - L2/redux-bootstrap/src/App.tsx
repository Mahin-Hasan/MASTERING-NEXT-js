import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); // must be called using () or else it will not work be careful
  };
  const handleDecrement = () => {
    dispatch(decrement()); // must be called using () or else it will not work be careful
  };

  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <button onClick={handleIncrement}>Increment</button>
        <div>s</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
