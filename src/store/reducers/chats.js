import { ADD_MESSAGE_TO_STORE, ADD_CHAT, DELETE_CHAT} from '../actions/chats'

const initialState = {chats: []}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case ADD_MESSAGE_TO_STORE: {
            return {
                ...state,
                chats: state.chats.map(chat => {
                    if (chat.id === action.payload.chatId) {
                        const findMes = chat.messageList.find(mes => mes.id === action.payload.mesId)
                        if (!findMes) {
                            chat.messageList.push({id: action.payload.mesId, autor: action.payload.value.autor, text: action.payload.value.text})
                        } 
                    }
                    return chat
                })
            }
        }
        case ADD_CHAT: {
            const findChat = state.chats.find(chat => chat.id === action.payload.chatId)
            if (!findChat) { 
                return {
                ...state,
                chats: [...state.chats, {
                    id: action.payload.chatId, 
                    name: action.payload.chatName, 
                    messageList:[]
                }]
                }
            }
           return state
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