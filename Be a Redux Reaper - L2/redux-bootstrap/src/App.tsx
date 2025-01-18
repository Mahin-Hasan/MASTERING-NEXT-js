import "./App.css";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { RootState } from "./redux/store"; // solves unknown error
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch(); // does the work of useDispatch in a cleaner way
  // const {count} = useSelector((state:RootState) => state.counter); // here counter should match with store.ts
  const { count } = useAppSelector((state) => state.counter); // here counter should match with store.ts | does the same work as useSelector

  const handleIncrement = (amount:number) => {
    dispatch(increment(amount)); // must be called using () or else it will not work be careful
  };

  const handleDecrement = () => {
    dispatch(decrement()); // must be called using () or else it will not work be careful
  };

  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
