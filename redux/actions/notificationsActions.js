import { EDIT_MESSAGE, SET_VISIBILITY, SET_SOUNDS, TOGGLE_SOUNDS } from '../types'

export const editMessage = (newMassage) => {
    return {
        type: EDIT_MESSAGE,
        payload: newMassage
    }
}

export const setVisibility = (visibility) => {
    return {
        type: SET_VISIBILITY,
        payload: visibility
    }
}

export const setSounds = (sounds) => {
    return {
        type: SET_SOUNDS,
        payload: sounds
    }
}

export const toggleSounds = () => {
    return {
        type: TOGGLE_SOUNDS
    }
}
