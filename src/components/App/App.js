import React from 'react'
import Router from '../../router/router'
import firebase from 'firebase'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { changeIsAuthed } from '../../store/actions/profile';
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import ForumIcon from '@material-ui/icons/Forum'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';

const useStyles = makeStyles((theme) => ({
    icon: {
      color: 'white',
      padding: '10px',
      fontSize: 'large',
    }
  }));

function App() {
  const classes = useStyles();
  const { isAuthed } = useSelector(state => state.profile)
  const dispatch = useDispatch()
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(changeIsAuthed(Boolean(user)))
    })
  }, [])

  const handleSignOut = () => firebase.auth().signOut()

  return (
    <>
    <div className='navbar'>
                <div>
                    <Link className={classes.icon} to='/'> <HomeIcon /> </Link>
                    <Link className={classes.icon} to='/chats'> <ForumIcon /> </Link>
                    <Link className={classes.icon} to='/posts'> <InsertCommentIcon /> </Link>  
                </div>

                <div>
                  <Link className={classes.icon} to='/profile'> <PersonIcon /> </Link>
                  {isAuthed ? <span className={classes.icon} onClick={handleSignOut}> <MeetingRoomTwoToneIcon /></span> : null}
                </div>
            </div>
    <Router /> 
    </>
  );
}
export default App;
// ReactDOM.render(<App />, document.querySelector('#app'));