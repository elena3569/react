import './Message.sass'
import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NewChatForm from './NewChatForm'
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ChatList () {
    const chatList = useSelector(state => state.chats)

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <List>
            <ListItem button key='newChat'>
              <NewChatForm />
            </ListItem> 
            {chatList.map((chat) => (
                <Link key={chat.id} to={`/chats/${chat.id}`}>
                  <ListItem button key={chat.id}>
                      <ListItemText primary={chat.name} />  
                  </ListItem> 
                </Link>
            ))}
          </List>
        </div>
    )
}

export default ChatList