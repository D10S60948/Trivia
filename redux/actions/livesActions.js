import { REDUCE_LIFE, RESET_LIVES, ADD_LIFE } from '../types'

export const reduceLife = () => {
    return {
        type: REDUCE_LIFE
    }
}

export const resetLives = () => {
    return {
        type: RESET_LIVES
    }
}
export const addLife = () => {
    return {
        type: ADD_LIFE
    }
}