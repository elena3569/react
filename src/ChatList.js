import './Message.sass'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ChatList () {
    const [chatList, setChatList] = useState([{id: 1, name: 'Chosen'}, {id: 2, name: 'Friends'}])

    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
      <div className={classes.root} subheader={<li />}>
        {chatList.map((chat) => (
            <ListItem key={chat.id}>
              <ListItemText primary={chat.name} />  
            </ListItem> 
        ))}
    </div>
    )
}

export default ChatList