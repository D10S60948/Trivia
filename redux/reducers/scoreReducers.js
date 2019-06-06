import { ADD_POINTS, RESET_SCORE, SET_HIGHEST_SCORES } from '../types'

const initialState = {
    currentScore: 0,
    highestScoreList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_POINTS:
            return {...state, currentScore: state.currentScore + action.payload}
        case RESET_SCORE:
            return {...state, currentScore: 0}
        case SET_HIGHEST_SCORES:
            return {...state, highestScoreList: action.payload}
        default:
            return state
    }
}