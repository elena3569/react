import axios from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { ADD_CHAT_TO_DB, ADD_MESSAGE,  DELETE_CHAT } from './actions/chats'
import { IS_ONLINE, TOGGLE_CHECKED } from './actions/profile'
import { GET_LIST_POSTS, SET_LIST_POSTS, setStatusLoading, setStatusError, setStatusIddle } from './actions/posts'
import firebase from 'firebase'

const delay =(ms) => new Promise(res => setTimeout(res, ms))

function random(max) {
  return Math.floor(Math.random() * max);
}

function* addMessageWorker(action) {
  firebase.database().ref('messages').child(action.payload.chatId).push(action.payload.value)
  yield delay(1500)
  firebase.database().ref('messages').child(action.payload.chatId).push({autor: 'bot', text: 'message sent'})
}


function addChatToDB (action) {
  const uid = random(100)
  firebase.database().ref('chats').child(`chat${uid}${action.payload.chatName}`).set(action.payload.chatName);
}

function* toggleChecked (action) {
    let label = ''
    if (!action.payload) {
        label = 'user is online'
    }
    else {
        label = 'user is offline'
    }
    yield put({ type: IS_ONLINE, payload: { isonline: !action.payload, label} })
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

function deleteChat(action) {
  firebase
        .database()
        .ref('chats')
        .child(action.payload.chatId)
        .remove()
  firebase
        .database()
        .ref('messages')
        .child(action.payload.chatId)
        .remove()
}

export function* chatWatcher() {
    yield takeEvery(DELETE_CHAT, deleteChat)
    yield takeEvery(ADD_MESSAGE, addMessageWorker)
    yield takeEvery(ADD_CHAT_TO_DB, addChatToDB)
    yield takeEvery(TOGGLE_CHECKED, toggleChecked)
    yield takeEvery(GET_LIST_POSTS, getListPosts)
}

export default chatWatcher;