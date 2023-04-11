import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

export const CounterFunctional = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);
  const showCounter = useSelector(state => state.counter.showCounter);

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const increaseByFive = () => {
    dispatch(counterActions.increaseByFive(5));
  }

  const handleShowCounter = () => {
    dispatch(counterActions.showCounter())
  }

  return(
    <>
      <h1>Functional Component</h1>
      <div>
        <p>{value}</p>
        {
          showCounter
          ? <>
              <div>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrement}>Increment</button>
              </div>
              <div>
                <button onClick={increaseByFive}>Incresase by 5</button>
              </div>
              <div>
                <button onClick={handleShowCounter}>Hide Counter</button>
              </div>
          </>
          : <>
              <button onClick={handleShowCounter}>Show Counter</button>
          </>
        }
      </div>
    </>
  )
}
