import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'; 
import configureStore from 'redux-mock-store'
import ChatItem from './ChatItem'
import { addMessage } from '../../../store/actions/chats'

const initialState = {chats: [
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

const middlewares = []
const mockStore = configureStore(middlewares)


    jest.mock('react-router', () => ({
        ...jest.requireActual('react-router'), 
        useParams: () => ({
            chatId: '1chat1',
        }),
        useRouteMatch: () => ({ url: '/chats/1chat1' }),
    }));
    jest.mock('react-redux', () => ({
          ...jest.requireActual('react-redux'), 
        useSelector: () => ({
            chats: initialState.chats
        }),
      }))

describe("ChatItem", () => {

    it ('payload must match the passed parameters', () => {
        const store = mockStore(initialState)
        store.dispatch(addMessage('1chat1', {autor:'me', text: 'message'}))
        const actions = store.getActions()
        const expectedPayload = {
            type: 'CHATS::ADD_MESSAGE',
            payload: {
                chatId: '1chat1',
                value: {autor:'me', text: 'message'}
            }
        }
        expect(actions).toEqual([expectedPayload])
    })


    it ('value must be equal to the text in input', () => {

        let container = document.createElement("div");
        document.body.appendChild(container);
        const store = mockStore(initialState)

        act(() => {
            render(<Provider store={store}>
                        <ChatItem /> 
                    </Provider>, container);
        });
        const input = document.querySelector("[id='input']")
        fireEvent.change(input, {target: {value: 'text message'}})
        expect(input.value).toBe('text message')
    })
})

    