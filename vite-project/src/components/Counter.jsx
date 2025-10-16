import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/store";
const Counter = () => {
  const dispatch = useDispatch(); // Use directly
  const counter = useSelector((state) => state.counter.counter); // a function which will receive the state managed redux we wil return the part of the state
  //we can access to the data managed inour store by using useSelector
  //which then basically determines which piece of data we wana extract form out store
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementHandler5 = () => {
    dispatch(counterActions.increment5(5));
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1 className="bg-green-400 text-3xl font-bold underline">
        Redux Counter
      </h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler5}>Increment by 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
