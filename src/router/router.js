import './router.sass'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Home from '../components/Home/Home'
import Chats from '../components/Chats/Chats'
import Profile from '../components/Profile/Profile'
import Posts from '../components/Posts/Posts'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import ForumIcon from '@material-ui/icons/Forum'
import InsertCommentIcon from '@material-ui/icons/InsertComment';

const useStyles = makeStyles((theme) => ({
    icon: {
      color: 'white',
      padding: '10px',
      fontSize: 'large',
    }
  }));

export default function Router() {
    const classes = useStyles();

    return (
        <div>
            <div className='navbar'>
                <div>
                    <Link className={classes.icon} to='/'> <HomeIcon /> </Link>
                    <Link className={classes.icon} to='/chats'> <ForumIcon /> </Link>
                    <Link className={classes.icon} to='/posts'> <InsertCommentIcon /> </Link>
                </div>
                <Link className={classes.icon} to='/profile'> <PersonIcon /> </Link>
            </div>
            
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/chats/:chatId?" component={Chats} />

                <Route path='/profile' component={Profile}/>

                <Route path='/posts' component={Posts}/>

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}