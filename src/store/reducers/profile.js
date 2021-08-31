import { IS_ONLINE, SET_AGE, SET_NAME, CHANGE_IS_AUTHED, SET_EMAIL } from '../actions/profile'

const initialState = {
    label: 'user is online',
    isAuthed: false,
    isOnline: false,
    email: '',
    name: '',
    age: ''
}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
                label: action.payload.label,
            }
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case SET_AGE: {
            return {
                ...state,
                age: action.payload
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                age: action.payload
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isOnline: true, 
                isAuthed: action.payload,
            }
        }
        default:
            return state
    }
}