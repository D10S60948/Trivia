import reducer from "../../redux/reducers/livesReducers";
import * as actions from '../../redux/actions/livesActions'
import * as types from '../../redux/types'

const initialState = 3

describe('lives reducers', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle REDUCE_LIFE', () => {
        expect(reducer(initialState,
            {
                type: types.REDUCE_LIFE
            } 
        ))
        .toEqual(2)
    })

    it('should handle ADD_LIFE', () => {
        expect(reducer(initialState,
            {
                type: types.ADD_LIFE
            } 
        ))
        .toEqual(4)
    })

    it('should handle RESET_LIVES', () => {
        expect(reducer(0,
            {
                type: types.RESET_LIVES
            } 
        ))
        .toEqual(3)
    })
})

describe('lives actions', () => {

    it('should create an action to reduce 1 life', () => {
        const expectedAction = {
        type: types.REDUCE_LIFE,
      }
      expect(actions.reduceLife()).toEqual(expectedAction)
    })

    it('should create an action to reset lives', () => {
        const expectedAction = {
        type: types.RESET_LIVES
        }
      expect(actions.resetLives()).toEqual(expectedAction)
    })

    it('should create an action to add 1 life', () => {
        const expectedAction = {
        type: types.ADD_LIFE
        }
      expect(actions.addLife()).toEqual(expectedAction)
    })

  })
