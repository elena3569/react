import './ChatItem.sass'
import firebase from 'firebase'
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { useParams } from 'react-router'
import { addMessage, addMessagetoStore } from '../../../store/actions/chats'
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '400px',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '400px',
    },
   
  },
  btn: {
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  labelBtn: {
    color: '#2196f3',
    fontSize: '50px',
  }
}));

function ChatItem () {
    const { chats } = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const params = useParams();
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const input = React.createRef();

    
    // useEffect(() => {
    //   if (params.chatId) {
    //     firebase
    //     .database()
    //     .ref('messages')
    //     .child(params.chatId)
    //     .on('child_added', (snapshot) => {
    //       dispatch(addMessagetoStore(params.chatId, snapshot.val(), snapshot.key))
    //     })

    //   }
    // }, [params.chatId])
    
    const chat = useMemo(()=> {
      return chats?.find(chat => chat.id === params.chatId)
    }, [params.chatId, chats]);

    const handleMessage = (e) => {
      setMessage(e.target.value);
    };
    const handleMessageList = useCallback(() => {
      if (message) {
        // firebase.database().ref('messages').child(params.chatId).push({autor:'me', text: message})
        dispatch(addMessage(params.chatId, {autor:'me', text: message}))
      }
      setMessage('');
      input.current.focus();
    }, [dispatch, params.chatId, message, input])
    
    return (
      <>
        {params.chatId ? 
          <div className={`${classes.root} chatItem`}>
                {chat?.messageList.map((message, index) => 
                <div key={message.id}>{message.autor}: {message.text}</div>) }
              
                <div className='form'>
                <TextField
                  id='input'
                  className='input'
                  inputRef = {input}
                  multiline
                  required
                  variant="outlined"
                  autoFocus 
                  value={message} 
                  onChange={handleMessage}/>
                <Button className={classes.btn} id='button' type='submit' variant='contained' color='primary' 
                  onClick={handleMessageList}><SendRoundedIcon className={classes.labelBtn} /></Button>
              </div>
          </div>
         : <Redirect to='/chats' />}
      </>
    )
}

export default ChatItem