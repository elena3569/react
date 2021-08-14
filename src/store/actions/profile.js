export const TOGGLE_CHECKED = 'PROFILE::TOGGLE_CHECKED'
export const IS_ONLINE = 'PROFILE::IS_ONLINE'

export const toggleChecked = (isChecked) => ({
    type: TOGGLE_CHECKED,
    payload: isChecked
})