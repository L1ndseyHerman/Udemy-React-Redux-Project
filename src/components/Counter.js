import {useSelector, useDispatch} from 'react-redux';

import {counterActions} from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {

  //  useDispatch returns a dispatch function.
  const dispatch = useDispatch();

  //  If u have a huge state object, just getting the counter property is helpful.
  //  This also subscribes this component to the store! Helpful!
  //  It updates the counter when the store updates... so the Observer pattern, maybe?
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    //  Impt! Actually execute the function here!
    dispatch(counterActions.increment());
  };

  //  The value is just hard-coded here for demo purposes, may call this 
  //  mult times w dif values, or get a variable the user typed in, etc.
  const increaseHandler = () => {
    //  Can pass a number like this, or an object, or whatever.
    //  This will always get stored as "payload".
    //  {type: WHAT_EVER, payload: 10}
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*class Counter extends Component {

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  //  Don't forget the "this"s!
  //  Class-based alternatives to useDispatch() and useSelector()?
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//  It's convention to name it this:
//  Maps the store to the component's props, or something. "counter" is a prop now.
//  It's the alternative to useSelector().
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

//  And this is the alternative to useDispatch().
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'})
  }
};

//  This is where to put the connect()! It sets up and manages the subscription
//  same as the functional component hooks.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
