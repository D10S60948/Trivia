import { REDUCE_LIFE, RESET_LIVES, ADD_LIFE } from '../types'

const initialState = 3

export default (state = initialState, action) => {
    switch(action.type) {
        case REDUCE_LIFE:
            return state-1
        case ADD_LIFE:
            return state+1
        case RESET_LIVES:
            return initialState
        default:
            return state
    }
}