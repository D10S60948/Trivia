import { EDIT_MESSAGE, SET_VISIBILITY } from '../types'

const initialState = {
    visibility: false,
    message: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case EDIT_MESSAGE:
            return {...state, message: action.payload}
        case SET_VISIBILITY:
            return {...state, visibility: action.payload}
        default:
            return state
    }
}