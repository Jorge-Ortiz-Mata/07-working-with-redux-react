import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';

// ============ Redux with Class Components ============
class CounterClass extends Component {

  handleDecrement() {
    this.props.decrement();
  }

  handleIncrement() {
    this.props.increment();
  }

  render() {
    return(
      <>
      <h1>Class Component</h1>
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
      </div>
    </>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

const mapDispatch = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
   };
}

export default connect(mapsStateToProps, mapDispatch)(CounterClass);

// ============ Redux with Functional Components ============
export const CounterFunctional = () => {
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
      <h1>Functional Component</h1>
      <div>
        <p>{counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  )
}
