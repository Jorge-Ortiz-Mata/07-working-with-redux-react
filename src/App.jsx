import Login from './components/Login';
import Header from './components/Header';
import { CounterFunctional } from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <h1>React - Readux App.</h1>
      <CounterFunctional />
      <Login />
    </div>
  );
}

export default App;
