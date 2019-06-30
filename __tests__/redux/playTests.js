import reducer from "../../redux/reducers/playReducers"
import * as actions from '../../redux/actions/playActions'
import * as types from '../../redux/types'

const initialState = {
    countries: [],
    selectedAnswers: [],
    correctAnswer: '',
    question: {},
    ready: false,
    selectedQuestionSubjects: [0,1,2,3,4,5]
}

describe('play reducers', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_COUNTRY_TO_LIST', () => {
        expect(reducer(initialState,
            {
                type: types.ADD_COUNTRY_TO_LIST,
                payload: {
                    code: 'IL',
                    name: 'Israel',
                    emoji: 'il',
                    currency: 'ILS',
                    languages: [{ name: 'Hebrew' }] 
                }
            } 
        ))
        .toEqual({
            ...initialState, 
            countries: [{
                code: 'IL',
                name: 'Israel',
                emoji: 'il',
                currency: 'ILS',
                languages: [{ name: 'Hebrew' }] 
            }]
        })

        expect(reducer({...initialState, 
            countries: [{
                code: 'IL',
                name: 'Israel',
                emoji: 'il',
                currency: 'ILS',
                languages: [{ name: 'Hebrew' }] 
            }]},
            {
                type: types.ADD_COUNTRY_TO_LIST,
                payload: {
                    code: 'AU',
                    name: 'Australia',
                    emoji: 'au',
                    currency: 'AUD',
                    languages: [{ name: 'English' }] 
                }
            } 
        ))
        .toEqual({
            ...initialState, 
            countries: [
                {
                    code: 'IL',
                    name: 'Israel',
                    emoji: 'il',
                    currency: 'ILS',
                    languages: [{ name: 'Hebrew' }] 
                },
                {
                    code: 'AU',
                    name: 'Australia',
                    emoji: 'au',
                    currency: 'AUD',
                    languages: [{ name: 'English' }] 
                }
            ]
        })
    })

    it('should handle SET_NOT_READY', () => {
        expect(reducer({...initialState, ready: true},
            {
                type: types.SET_NOT_READY
            } 
        ))
        .toEqual({
            ...initialState,
            ready: false
        })
    })
})

describe('play actions', () => {
    it('should create an action to reduce 1 life', () => {
        const country = {
            code: 'IL',
            name: 'Israel',
            emoji: 'il',
            currency: 'ILS',
            languages: [{ name: 'Hebrew' }] 
        }
        const expectedAction = {
        type: types.ADD_COUNTRY_TO_LIST,
        payload: country
      }
      expect(actions.addCountry(country)).toEqual(expectedAction)
    })

    it('should create an action to set ready state to false', () => {
        const expectedAction = {
        type: types.SET_NOT_READY
        }
      expect(actions.setNotReady()).toEqual(expectedAction)
    })

    it('should create an action to reset answers and question', () => {
        const expectedAction = {
        type: types.RESET_ANSWERS_AND_QUESTIONS
        }
      expect(actions.resetAnwersAndQuestion()).toEqual(expectedAction)
    })
  })
