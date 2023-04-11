import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

export const CounterFunctional = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector(state => state);

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
        <p>{counter}</p>
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
      <div>
      </div>
      <div>
      </div>
    </>
  )
}
