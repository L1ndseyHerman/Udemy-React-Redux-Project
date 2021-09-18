import {useSelector, useDispatch} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  //  useDispatch returns a dispatch function.
  const dispatch = useDispatch();

  //  If u have a huge state object, just getting the counter property is helpful.
  //  This also subscribes this component to the store! Helpful!
  //  It updates the counter when the store updates... so the Observer pattern, maybe?
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
