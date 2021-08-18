export const GET_LIST_POSTS = 'POSTS::GET_LIST_POSTS'
export const SET_LIST_POSTS = 'POSTS::SET_LIST_POSTS'
export const SET_STATUS_LOADING = 'POSTS::SET_STATUS_LOADING'
export const SET_STATUS_ERROR= 'POSTS::SET_STATUS_ERROR'
export const SET_STATUS_IDDLE= 'POSTS::SET_STSTUS_IDDLE'


export const getListPosts = () => ({type: GET_LIST_POSTS})
export const setStatusLoading = () => ({type: SET_STATUS_LOADING})
export const setStatusError = () => ({type: SET_STATUS_ERROR})
export const setStatusIddle = () => ({type: SET_STATUS_IDDLE})