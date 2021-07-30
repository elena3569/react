import './Message.sass'
import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteChat } from './store/actions/chats'
import NewChatForm from './NewChatForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));
function ChatList () {
  const { chats } = useSelector(state => state.chats);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();

  const handleDelete = React.useCallback((event) => {
    console.log(event.currentTarget.id, params);
    if (event.currentTarget.id === params.chatId) {
      history.push('/chats')
    }
    dispatch(deleteChat(event.currentTarget.id))
  }, [params, dispatch, history])

    return (
        <div className={classes.root}>
          <List>
            <ListItem button key='newChat'>
              <NewChatForm />
            </ListItem> 
            {chats?.map((chat) => (
              <ListItem button key={chat.id}>
                <Link key={chat.id} to={`/chats/${chat.id}`}>
                    <ListItemText primary={chat.name} />  
                </Link>
                <Button key={`btn${chat.id}`} id={chat.id} onClick={handleDelete}>
                  <DeleteIcon />
                </Button>
              </ListItem> 
            ))}
          </List>
        </div>
    )
}

export default ChatList