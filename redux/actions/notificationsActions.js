import { EDIT_MESSAGE, SET_VISIBILITY } from '../types'

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
