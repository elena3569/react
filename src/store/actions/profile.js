export const TOGGLE_CHECKED = 'PROFILE::TOGGLE_CHECKED'
export const IS_ONLINE = 'PROFILE::IS_ONLINE'
export const SET_AGE = 'PROFILE::SET_AGE'
export const SET_NAME = 'PROFILE::SET_NAME'
export const SET_EMAIL = 'PROFILE::SET_EMAIL'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'

export const toggleChecked = (isChecked) => ({
    type: TOGGLE_CHECKED,
    payload: isChecked
})
export const setAge = (age) => ({
    type: SET_AGE,
    payload: age
})
export const setName= (name) => ({
    type: SET_NAME,
    payload: name
})
export const setEmail= (email) => ({
    type: SET_EMAIL,
    payload: email
})
export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: isAuthed
})
