import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import {chatWatcher} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
})

    const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose 
    
    export const store = createStore(
        rootReducer,
        // applyMiddleware(sagaMiddleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnchancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(chatWatcher)