import reducer from './chats'
import { addMessagetoStore, addChat, deleteChat} from '../actions/chats'


describe('ChatReducer', () => {
    const state = {chats: [
        {
            id: '1chat1', 
            name: 'chat1', 
            messageList: [
                {   
                    id: '1',
                    autor: 'me', 
                    text: 'hello'
                }, 
                {
                    id: '2',
                    autor: 'bot', 
                    text: 'send message'
                }
            ]
        },
        {
            id: '3chat3', 
            name: 'chat3', 
            messageList: [
                {   
                    id: '1',
                    autor: 'me', 
                    text: 'hello'
                }, 
                {
                    id: '2',
                    autor: 'bot', 
                    text: 'send message'
                }
            ]
        }
    ]}

    it('length of messages should be incremented', () => {
        
        const chatId = '1chat1'
        const action = addMessagetoStore(chatId, {autor: 'me', text: 'qwerty'}, '3')
        const startLength = state.chats.find(chat => chat.id === chatId).messageList.length
       
        const newState = reducer(state, action)
       
        const newLength = newState.chats.find(chat => chat.id === chatId).messageList.length
        
        expect(newLength - startLength).toBe(1)
    })

    it('length of chats should be incremented', () => {
        const action = addChat('2chat2', 'chat2')
        const newState = reducer(state, action)
        expect(newState.chats.length - state.chats.length).toBe(1)
    })

    it('length of chats should be decremented', () => {
        const action = deleteChat('3chat3')
        const newState = reducer(state, action)
        expect(newState.chats.length - state.chats.length).toBe(-1)
    })
})