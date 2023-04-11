import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';

// // ============ Redux with Class Components ============
// class CounterClass extends Component {

//   handleDecrement() {
//     this.props.decrement();
//   }

//   handleIncrement() {
//     this.props.increment();
//   }

//   render() {
//     return(
//       <>
//       <h1>Class Component</h1>
//       <div>
//         <p>{this.props.counter}</p>
//         <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//       </div>
//     </>
//     )
//   }
// }

// const mapsStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatch = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//    };
// }

// export default connect(mapsStateToProps, mapDispatch)(CounterClass);

// ============ Redux with Functional Components ============
export const CounterFunctional = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector(state => state);

  const handleDecrement = () => {
    dispatch({type: 'decrement'});
  }

  const handleIncrement = () => {
    dispatch({type: 'increment'});
  }

  const increaseByFive = () => {
    dispatch({type: 'increaseByFive', amount: 5});
  }

  const handleHideCounter = () => {
    dispatch({ type: 'hideCounter' })
  }

  const handleShowCounter = () => {
    dispatch({ type: 'showCounter' })
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
                <button onClick={handleHideCounter}>Hide Counter</button>
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
