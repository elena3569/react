import axios from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { ADD_MESSAGE, ADD_MESSAGE_SAGA } from './actions/chats'
import { IS_ONLINE, TOGGLE_CHECKED } from './actions/profile'
import { GET_LIST_POSTS, SET_LIST_POSTS, setStatusLoading, setStatusError, setStatusIddle } from './actions/posts'


const delay =(ms) => new Promise(res => setTimeout(res, ms))

function* addMessageWorker(action) {
    yield put({ type: ADD_MESSAGE_SAGA, payload: action.payload })
    yield delay(1500)
    yield put({ type: ADD_MESSAGE_SAGA, payload: {chatId: action.payload.chatId, value: {autor: 'bot', text: 'message sent'}}})
}

function* toggleChecked (action) {
    let label = ''
    if (!action.payload) {
        label = 'user is online'
    }
    else {
        label = 'user is offline'
    }
    yield put({ type: IS_ONLINE, payload: { isChecked: !action.payload, label} })
}

function fetchPosts() {
    return axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts"
    });
  }

function* getListPosts() {
    try {
        yield put(setStatusLoading())
        const response = yield call(fetchPosts);
        const posts = response.data;
        console.log(response);
  
    
        if ( response.status !== 200) {
            throw Error('Something went wrong')
        }
        
        yield put(setStatusIddle())
        yield put({ type: SET_LIST_POSTS, payload: posts })
                    

    } catch (error) {
        console.error(error);
        yield put(setStatusError())
    }
}

export function* chatWatcher() {
    yield takeEvery(ADD_MESSAGE, addMessageWorker)
    yield takeEvery(TOGGLE_CHECKED, toggleChecked)
    yield takeEvery(GET_LIST_POSTS, getListPosts)
}

export default chatWatcher;