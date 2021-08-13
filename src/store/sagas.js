import { put, takeEvery } from 'redux-saga/effects'
import { addMessage, ADD_MESSAGE } from './actions/chats'

const delay =(ms) => new Promise(res => setTimeout(res, ms))

function* addMessageWorker(action) {
    yield put({ type: ADD_MESSAGE, payload: action.payload })
    yield delay(1500)
    yield put(addMessage({autor: 'bot', text: 'message sent'}))
}

// function* robotResponseWorker() {
// }

export function* chatWatcher() {
    yield takeEvery(ADD_MESSAGE, addMessageWorker)
}

export default chatWatcher;