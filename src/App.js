import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <header className="App-header">
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
