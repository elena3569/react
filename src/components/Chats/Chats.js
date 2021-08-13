// import './App.css';
import React from 'react';
import ChatItem from './ChatItem/ChatItem.js'
import ChatList from './ChatList/ChatList.js'


function Chats() {
  return (
      <div className='chats'>
        <ChatList />
        <ChatItem />
      </div>
  );
}
export default Chats;
