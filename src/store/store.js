import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import {chatWatcher} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
    )
)

sagaMiddleware.run(chatWatcher)