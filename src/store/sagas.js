import { put, takeEvery } from 'redux-saga/effects'
import { ADD_MESSAGE, ADD_MESSAGE_SAGA } from './actions/chats'

const delay =(ms) => new Promise(res => setTimeout(res, ms))

function* addMessageWorker(action) {
    yield put({ type: ADD_MESSAGE_SAGA, payload: action.payload })
    yield delay(1500)
    yield put({ type: ADD_MESSAGE_SAGA, payload: {chatId: action.payload.chatId, value: {autor: 'bot', text: 'message sent'}}})
}

export function* chatWatcher() {
    yield takeEvery(ADD_MESSAGE, addMessageWorker)
}

export default chatWatcher;