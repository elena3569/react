import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)