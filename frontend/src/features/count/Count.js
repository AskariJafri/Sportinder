import { useDispatch, useSelector } from "react-redux";
import { increaseOne, decreaseOne } from "./reducer.count";

export default () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.reducerCount;
  });

  const increase = () => {
    dispatch(increaseOne());
  };

  const decrease = () => {
    dispatch(decreaseOne());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase one
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Decrease one
      </button>
    </div>
  );
};
