import React from 'react';
import firebase from 'firebase'
import { addChat } from '../../../store/actions/chats'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteChat } from '../../../store/actions/chats'
import NewChatForm from '../NewChatForm/NewChatForm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '30%',
    position: 'absolute',
    top: '50px',
    left: 0,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    backgroundColor: 'rgba(33, 150, 243, 0.4)',
    padding: '5px',
    paddingRight: 0,
    margin: '5px',
    borderRadius: '5px',
    justifyContent: 'space-around'
  },
  blacklabel: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: '500',
  },
  label: {
    color: 'white',
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
  }, [dispatch, params, history])

  React.useEffect(() => {
    firebase
        .database()
        .ref('chats')
        .on('child_added', (snapshot) => {
          dispatch(addChat(snapshot.key, snapshot.val()));
        })
  
    firebase
        .database()
        .ref('chats')
        .on('child_changed', snapshot => {
          dispatch(addChat(snapshot.key,snapshot.val()));
        })

  }, [])

    return (
        <div className={classes.root}>
          <List >
            <ListItem button key='newChat'>
              <NewChatForm />
            </ListItem> 
            {chats?.map((chat) => (
              <ListItem className={classes.item} button key={chat.id}>
                <Link  className={classes.blacklabel} key={chat.id} to={`/chats/${chat.id}`}>
                    <ListItemText primary={chat.name} />  
                </Link>
                <Button key={`btn${chat.id}`} id={chat.id} onClick={handleDelete}>
                  <DeleteIcon className={classes.label} />
                </Button>
              </ListItem> 
            ))}
          </List>
        </div>
    )
}

export default ChatList