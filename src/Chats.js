import './App.css';
import React from 'react';
import ChatItem from './ChatItem.js'
import ChatList from './ChatList.js'


function Chats() {
  return (
      <div className='chats'>
        <ChatList />
        <ChatItem />
      </div>
  );
}
export default Chats;
