import { TOGGLE_CHECKED } from '../actions/profile'

const initialState = {
    isChecked: true,
    label: 'true'
}

export default function reduser(state = initialState, action) {
    switch (action.type){
        case TOGGLE_CHECKED: {
            return {
                ...state,
                isChecked: !state.isChecked,
                label: String(!state.isChecked),
            }
        }
        default:
            return state
    }
}