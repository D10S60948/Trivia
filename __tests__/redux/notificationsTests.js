import reducer from "../../redux/reducers/notificationsReducers"
import * as actions from '../../redux/actions/notificationsActions'
import * as types from '../../redux/types'

const initialState = {
    visibility: false,
    message: '',
    sounds: {}
}

describe('notifications reducers', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle EDIT_MESSAGE', () => {
        expect(reducer({
            visibility: false,
            message: '456 TEST'
        },
            {
                type: types.EDIT_MESSAGE,
                payload: '123 test'
            } 
        ))
        .toEqual({
            visibility: false,
            message: '123 test'
        })
    })

    it('should handle SET_VISIBILITY', () => {
        expect(reducer({
            visibility: false,
            message: '123 testing visibility'
        },
            {
                type: types.SET_VISIBILITY,
                payload: true
            } 
        ))
        .toEqual({
            visibility: true,
            message: '123 testing visibility'
        })

        expect(reducer({
            visibility: true,
            message: '123 testing visibility'
        },
            {
                type: types.SET_VISIBILITY,
                payload: true
            } 
        ))
        .toEqual({
            visibility: true,
            message: '123 testing visibility'
        })
    })
})

describe('notifications actions', () => {
    it('should create an action to edit a message', () => {
        const text = 'new message'
        const expectedAction = {
        type: types.EDIT_MESSAGE,
        payload: text
      }
      expect(actions.editMessage(text)).toEqual(expectedAction)
    })

    it('should create an action to set visibility', () => {
        const expectedAction = {
        type: types.SET_VISIBILITY,
        payload: false
      }
      expect(actions.setVisibility(false)).toEqual(expectedAction)
    })
  })
