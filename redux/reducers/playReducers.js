import { ADD_COUNTRY_TO_LIST, SET_NOT_READY, RESET_ANSWERS_AND_QUESTIONS } from '../types'

const initialState = {
    countries: [],
    selectedAnswers: [],
    correctAnswer: '',
    question: {},
    ready: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_COUNTRY_TO_LIST: 
            return {...state, countries: [...state.countries, action.payload]}
        case SET_NOT_READY: 
            return {...state, ready: false}
        case RESET_ANSWERS_AND_QUESTIONS:
            let newQuestion = setQuestion()
            let newAnswers = setAnswers(state.countries, newQuestion.type)
            return {...state, 
                selectedAnswers: newAnswers.answers, 
                correctAnswer: newAnswers.correctAnswer,
                question: newQuestion,
                ready: true
            }
        default:
            return state
    }
}

function setQuestion() {
    let randomQuestion = Math.floor(Math.random() * 3)
    switch(randomQuestion) {
        case 0:
            return {identifier: 'flag', type: 'selection'}
        case 1:
            return {identifier: 'currency', type: 'trueOrFalse'}
        case 2:
            return {identifier: 'language', type: 'trueOrFalse'}
    }
}

function setAnswers(countriesList, type) {
    return type == 'selection' ? setAnswersForSelectionQuestions(countriesList) : setAnswersForTrueOrFalseQuestions(countriesList)
}

function setAnswersForSelectionQuestions(countriesList) {
    let results = {answers: [], correctAnswer: {}}
    let correctAnswerIndex = Math.floor(Math.random() * 4)

    for(let i=0; i<4; i++) {
        let randomIndex = Math.floor(Math.random() * countriesList.length)
        let raffledCountry = countriesList[randomIndex]
        results.answers.push(raffledCountry)

        if(i==correctAnswerIndex) {
            results.correctAnswer = raffledCountry
        }
    }

    return results
}

function setAnswersForTrueOrFalseQuestions(countriesList) {
    let results = {answers: [], correctAnswer: {}}
    let correctAnswerIndex = Math.floor(Math.random() * 2)

    for(let i=0; i<2; i++) {
        let randomIndex = Math.floor(Math.random() * countriesList.length)
        let raffledCountry = countriesList[randomIndex]
        results.answers.push(raffledCountry)
    }

    if(correctAnswerIndex == 1) {
        results.correctAnswer = {...results.answers[0], trueOrFalse: 'True'}
    }
    else {
        results.correctAnswer = {...results.answers[1], name: results.answers[0].name, trueOrFalse: 'False'}
    }   

    return results
}