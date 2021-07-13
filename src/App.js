import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleMessageList = () => {
    const newList = [...messageList, {autor:'me', text: message}];
    setMessageList(newList);
    setMessage('');
  }
  const robotResponse = {autor: 'robot', text: 'Message sent'};
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (messageList[messageList.length-1].autor !== 'robot'){
        setMessageList(() => {
          return [...messageList, robotResponse]
        })
      }
    }, 1500)
  }, [messageList]);
  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((message, index) => <div key={index}>{message.autor}:{message.text}</div>)}
        <div className='form'>
          <input type='text' value={message} onChange={handleMessage}/>
          <button onClick={handleMessageList}>send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
