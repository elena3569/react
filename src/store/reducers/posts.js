import { SET_LIST_POSTS, SET_STATUS_LOADING, SET_STATUS_ERROR, SET_STATUS_IDDLE } from '../actions/posts';

export const POSTS_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle',
}

const initialState = {
    list: [],
    status: POSTS_REQUEST_STATUS.IDLE,
}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case SET_LIST_POSTS: {
            return {
                ...state,
                list: action.payload,
            }
        }
        case SET_STATUS_ERROR: {
            return {
                ...state,
                status: POSTS_REQUEST_STATUS.ERROR
            }
        }
        case SET_STATUS_LOADING: {
            return {
                ...state,
                status: POSTS_REQUEST_STATUS.LOADING
            }
        }
        case SET_STATUS_IDDLE: {
            return {
                ...state,
                status: POSTS_REQUEST_STATUS.IDDLE
            }
        }
        default:
            return state
    }
}