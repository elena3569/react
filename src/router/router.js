import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Home from '../Home'
import Chats from '../Chats'
import Profile from '../Profile'

export default function Router() {
    return (
        <div>
            <div>
                <Link to='/'> Home </Link>
                <Link to='/chats'> Chats </Link>
                <Link to='/profile'> Profile </Link>
            </div>
            
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/chats/:chatId?" component={Chats} />

                <Route path='/profile' component={Profile}/>

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}