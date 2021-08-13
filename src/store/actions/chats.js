export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE'
export const ADD_CHAT = 'CHATS::ADD_CHAT'
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

// export function robotResponse (chatId, value) {
//     return {
//         type: ADD_MESSAGE,
//         payload: {
//             chatId,
//             value,
//         }
//     }
// }

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: { chatName }
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: { chatId }
})

