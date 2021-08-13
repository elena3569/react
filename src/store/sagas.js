import { put, takeEvery } from 'redux-saga/effects'
import { addMessage, robotResponse, ADD_MESSAGE, ROBOT_RESPONSE } from './actions/chats'

const delay =(ms) => new Promise(res => setTimeout(res, ms))

function* addMessageWorker() {
    yield put(addMessage)
}

function* robotResponseWorker() {
    yield delay(1500)
    yield put(robotResponse)
}

export function* chatWatcher() {
    yield takeEvery(ADD_MESSAGE, addMessageWorker)
    yield takeEvery(ROBOT_RESPONSE, robotResponseWorker)
}

export default chatWatcher;