import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import postsReducer from './reducers/posts'
import {chatWatcher} from './sagas'

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    posts: postsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
    )
)

export const persistor = persistStore(store)

sagaMiddleware.run(chatWatcher)