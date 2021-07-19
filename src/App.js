import './App.css';
// import React, { useState } from 'react';
import Chat from './Chat.js'
import ChatList from './ChatList.js'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue
  }
});


function App() {
  // const [chatList, setChatList] = useState([]);
    
  // React.useEffect(() => {
     
  // }, [chatList]);
  return (
    <ThemeProvider theme={theme}>
      <div className='chats'>
        <ChatList />
        <Chat />
      </div>
    </ThemeProvider>
  );
}
export default App;
// ReactDOM.render(<App />, document.querySelector('#app'));