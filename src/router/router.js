import './router.sass'
import React from 'react'
import { Switch, Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import Home from '../components/Home/Home'
import Chats from '../components/Chats/Chats'
import Profile from '../components/Profile/Profile'
import Posts from '../components/Posts/Posts'
import Login from '../components/Login/Login'
import { useSelector } from 'react-redux';

  
const PrivateRoute = (url) => {
    const { isAuthed } = useSelector(state => state.profile)
    
    return isAuthed ? <Route {...url} /> : <Redirect to='/login' />
}

export default function Router() {


    return (
        <div>
                        
            <Switch>
                <Route path="/" exact component={Home} />

                <PrivateRoute path="/chats/:chatId?" component={Chats} />

                <PrivateRoute path='/profile' component={Profile}/>

                <PrivateRoute path='/posts' component={Posts}/>

                <Route path='/login' component={Login} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}