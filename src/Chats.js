import './App.css';
import React, { useState } from 'react';
import ChatItem from './ChatItem.js'
import ChatList from './ChatList.js'
// import { useParams } from 'react-router'


function Chats() {
    // const [chatList, setChatList] = useState([{id: 1, name: 'Chosen', messageList: []}, {id: 2, name: 'Friends'}])
    

  return (
      <div className='chats'>
        <ChatList />
        <ChatItem />
      </div>
  );
}
export default Chats;
