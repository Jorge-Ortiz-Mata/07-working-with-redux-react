import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleDecrement = () => {
    dispatch({type: 'decrement'});
  }

  const handleIncrement = () => {
    dispatch({type: 'increment'});
  }

  return(
    <>
      <div>
        <p>{counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  )
}

export default Counter;
