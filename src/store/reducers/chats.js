import { ADD_MESSAGE, ADD_CHAT, DELETE_CHAT } from '../actions/chats'

const initialState = {chats: [
    {id: 'chat1Chosen', name: 'Chosen', messageList: [{autor: 'me', text: 'hi'}, {autor: 'robot', text: 'send message'}] }, 
    {id: 'chat2Fiends', name: 'Friends', messageList: [{autor: 'me', text: 'hello'}, {autor: 'robot', text: 'send message'}]}
]}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                chats: state.chats.map(chat => {
                    if (chat.id === action.payload.chatId) {
                        chat.messageList.push(action.payload.value)
                    }
                    return chat
                })
            }
        }
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, {
                    id: `chat${state.chats.length}${action.payload.chatName}`, 
                    name: action.payload.chatName, 
                    messageList:[]
                }]
            }
        }
        case DELETE_CHAT: {
            const findChat = state.chats.find(chat => chat.id === action.payload.chatId)
            if (findChat) {
                return {
                    ...state,
                    chats: state.chats.filter(chat => chat.id !== findChat.id)
                }
           }
           return state
        }
        default:
            return state
    }
}