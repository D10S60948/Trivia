import { ADD_POINTS, RESET_SCORE, SET_HIGHEST_SCORES } from '../types'

export const addPoints = (pointsToAdd) => {
    return {
        type: ADD_POINTS,
        payload: pointsToAdd
    }
}

export const resetScore = () => {
    return {
        type: RESET_SCORE
    }
}

export const setHighestScores = (scoresList) => {
    return {
        type: SET_HIGHEST_SCORES,
        payload: scoresList
    }
}
