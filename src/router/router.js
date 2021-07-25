import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import App from '../App'
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
                <Route path="/" exact component={App} />

                <Route exact path="/chats" render={() => <Chats />} />

                <Route path="/chats/:chatId" render={() => <Chats />} />

                <Route path='/profile' render={() => <Profile />} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}