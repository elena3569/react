// import { ADD_MESSAGE } from '../actions/chats'

const initialState = [
    {id: '1', name: 'Chosen', messageList: [{autor: 'me', text: 'hi'}, {autor: 'robot', text: 'send message'}] }, 
    {id: '2', name: 'Friends', messageList: [{autor: 'me', text: 'hello'}, {autor: 'robot', text: 'send message'}]}
]

export default function reduser(state = initialState, action) {
    // switch (action.type){
    //     case ADD_MESSAGE: {
    //         return {
    //             ...state,
    //         }
    //     }
    //     default:
            return state
    // }
}