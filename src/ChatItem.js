import './Message.sass'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import usePrevious from './hooks/usePrevious'

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
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const timer = React.useRef(null)
    const input = React.createRef(null);
    const prevMessageList = usePrevious(messageList)
    const handleMessage = (e) => {
      setMessage(e.target.value)
    }
    const handleMessageList = () => {
      const newList = [...messageList, {autor:'me', text: message}];
      setMessageList(newList);
      setMessage('');
      input.current.focus();
    }
    React.useEffect(() => {
      const robotResponse = {autor: 'robot', text: 'Message sent'};
        if (prevMessageList?.length < messageList.length && 
          messageList[messageList.length-1].autor !== 'robot'){
            timer.current = setTimeout(() => {
            setMessageList(() => {
              return [...messageList, robotResponse]
            })
        }, 1500)
      }
    }, [messageList, prevMessageList]);

    React.useEffect(()=>{
      return () => {
        clearTimeout(timer.current)
      }
    }, [])

    return (
      <div className={classes.root}>
        {messageList.map((message, index) => <div key={index}>{message.autor}:{message.text}</div>)}
        <div className='form'>
          <TextField
            ref = {input}
            multiline
            required
            variant="outlined"
            autoFocus 
            value={message} 
            onChange={handleMessage}/>
          <Button type='submit' variant='contained' color='primary' onClick={handleMessageList}>send</Button>
        </div>
      </div>
    )
}

export default ChatItem