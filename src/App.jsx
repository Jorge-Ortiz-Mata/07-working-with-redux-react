import CounterClass, { CounterFunctional } from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React - Readux App.</h1>
      <CounterFunctional />
      <CounterClass />
    </div>
  );
}

export default App;
