import reducer from "../../redux/reducers/scoreReducers"
import * as actions from '../../redux/actions//scoreActions'
import * as types from '../../redux/types'

const initialState = {
    currentScore: 0,
    highestScoreList: []
}

describe('score reducers', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_POINTS', () => {
        expect(reducer({
            currentScore: 10,
            highestScoreList: []
        },
            {
                type: types.ADD_POINTS,
                payload: 5
            } 
        ))
        .toEqual({
            currentScore: 15,
            highestScoreList: []
        })
    })

    it('should handle RESET_SCORE', () => {
        expect(reducer({
            currentScore: 10,
            highestScoreList: []
        },
            {
                type: types.RESET_SCORE
            } 
        ))
        .toEqual({
            currentScore: 0,
            highestScoreList: []
        })
    })

    it('should handle SET_HIGHEST_SCORES', () => {
        expect(reducer({
            currentScore: 10,
            highestScoreList: []
        },
        {
            type: types.SET_HIGHEST_SCORES,
            payload: [
                {name: 'abc', score: 55},
                {name: 'def', score: 45}
            ]
        } 
        ))
        .toEqual({
            currentScore: 10,
            highestScoreList: [
                {name: 'abc', score: 55},
                {name: 'def', score: 45}
            ]
        })
    })
})

describe('score actions', () => {
    it('should create an action to add points to current score', () => {
        const pointsToAdd = 10
        const expectedAction = {
        type: types.ADD_POINTS,
        payload: 10
      }
      expect(actions.addPoints(pointsToAdd)).toEqual(expectedAction)
    })

    it('should create an action to set the score to zero', () => {
        const expectedAction = {
        type: types.RESET_SCORE
        }
      expect(actions.resetScore()).toEqual(expectedAction)
    })

    it('should create an action to reset lives', () => {
        const scoresList = [{name: 'a', score: 10}, {name: 'b', score: 5}]
        const expectedAction = {
        type: types.SET_HIGHEST_SCORES,
        payload: scoresList
        }
      expect(actions.setHighestScores(scoresList)).toEqual(expectedAction)
    })
  })
