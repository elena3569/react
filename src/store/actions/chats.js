export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE'
export const ADD_MESSAGE_TO_STORE = 'CHATS::ADD_MESSAGE_SAGA'
export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const ADD_CHAT_TO_DB = 'CHATS::ADD_CHAT_TO_DB'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT' 

export function addMessage (chatId, value) {
    return {
        type: ADD_MESSAGE,
        payload: {
            chatId,
            value,
        }
    }
}
export function addMessagetoStore (chatId, value, mesId) {
    return {
        type: ADD_MESSAGE_TO_STORE,
        payload: {
            chatId,
            value,
            mesId
        }
    }
}

export const addChat = (chatId, chatName) => ({
    type: ADD_CHAT,
    payload: { chatId, chatName }
})

export const addChatToDB = (chatName) => ({
    type: ADD_CHAT_TO_DB,
    payload: { chatName }
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: { chatId }
})

