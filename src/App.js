import logo from './logo.svg';
import './App.css';
import Usuario from './components/Usuario/Usuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Usuario nombre="Andrés" apellido="Montoya"/>
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
      </header>
    </div>
  );
}

export default App;
