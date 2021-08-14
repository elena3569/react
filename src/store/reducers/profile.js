import { IS_ONLINE } from '../actions/profile'

const initialState = {
    isChecked: true,
    label: 'user is online'
}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case IS_ONLINE: {
            return {
                ...state,
                isChecked: action.payload.isChecked,
                label: action.payload.label,
            }
        }
        default:
            return state
    }
}