import { EDIT_MESSAGE, SET_VISIBILITY, SET_SOUNDS, TOGGLE_SOUNDS } from '../types'

const initialState = {
    visibility: false,
    message: '',
    sounds: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case EDIT_MESSAGE:
            return {...state, message: action.payload}
        case SET_VISIBILITY:
            return {...state, visibility: action.payload}
        case SET_SOUNDS:
            return {...state, sounds: action.payload}
        case TOGGLE_SOUNDS:
            return {...state, sounds: {...state.sounds, isOn: !state.sounds.isOn}}
        default:
            return state
    }
}
