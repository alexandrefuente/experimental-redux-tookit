import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Counter</h1>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>{" "}
      {counter}{" "}
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Counter;
