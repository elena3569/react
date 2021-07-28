import './Message.sass'
import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
// import usePrevious from './hooks/usePrevious'
import { useParams } from 'react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ChatItem () {
    const chatList = useSelector(state => state.chats)
    const params = useParams();
    const classes = useStyles();
    const [message, setMessage] = useState('');
    // // const [messageList, setMessageList] = useState([]);
    // const timer = React.useRef(null)
    const input = React.createRef(null);
    // const prevMessageList = usePrevious(messageList)
    const handleMessage = (e) => {
      setMessage(e.target.value)
    }
    // const handleMessageList = () => {
    //   const newList = [...messageList, {autor:'me', text: message}];
    //   setMessageList(newList);
    //   setMessage('');
    //   input.current.focus();
    // }
    // React.useEffect(() => {
    //   const robotResponse = {autor: 'robot', text: 'Message sent'};
    //     if (prevMessageList?.length < messageList.length && 
    //       messageList[messageList.length-1].autor !== 'robot'){
    //         timer.current = setTimeout(() => {
    //         setMessageList(() => {
    //           return [...messageList, robotResponse]
    //         })
    //     }, 1500)
    //   }
    // }, [messageList, prevMessageList]);

    // React.useEffect(()=>{
    //   return () => {
    //     clearTimeout(timer.current)
    //   }
    // }, [])

    
    const chat = useMemo(()=> {
      return chatList.find(chat => chat.id === params.chatId)
    }, [params.chatId, chatList])

    return (
      <div className={classes.root}>
        {chat ? chat.messageList.map((message, index) => <div key={index}>{message.autor}:{message.text}</div>) : <Redirect to='/chats' />}
        <div className='form'>
          <TextField
            inputRef = {input}
            multiline
            required
            variant="outlined"
            autoFocus 
            value={message} 
            onChange={handleMessage}/>
          <Button type='submit' variant='contained' color='primary' 
          // onClick={handleMessageList}
          >send</Button>
        </div>
      </div>
    )
}

export default ChatItem