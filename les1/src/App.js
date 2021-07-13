import logo from './logo.svg';
import './App.css';
import './Message.js';
import Message from './Message.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={'Hello, world!'} />
      </header>
    </div>
  );
}

export default App;
