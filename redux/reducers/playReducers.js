import { ADD_COUNTRY_TO_LIST, SET_NOT_READY, RESET_ANSWERS_AND_QUESTIONS, SET_SUBJECTS } from '../types'

const initialState = {
    countries: [],
    selectedAnswers: [],
    correctAnswer: '',
    question: {},
    ready: false,
    selectedQuestionSubjects: [0,1,2,3,4,5]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_COUNTRY_TO_LIST: 
            return {...state, countries: [...state.countries, action.payload]}
        case SET_NOT_READY: 
            return {...state, ready: false}
        case RESET_ANSWERS_AND_QUESTIONS:
            let newQuestion = setQuestion(state.selectedQuestionSubjects)
            let newAnswers = setAnswers(state.countries, newQuestion)
            return {...state, 
                selectedAnswers: newAnswers.answers, 
                correctAnswer: newAnswers.correctAnswer,
                question: newQuestion,
                ready: true
            }
        case SET_SUBJECTS:
            return {...state, selectedQuestionSubjects: action.payload}
        default:
            return state
    }
}

function setQuestion(selectedSubjects) {
    let randomIndex = Math.floor(Math.random() * selectedSubjects.length)
    
    switch(selectedSubjects[randomIndex]) {
        case 0:
            return {identifier: 'flag', type: 'selection'}
        case 1:
            return {identifier: 'capital', type: 'selection'}
        case 2:
            return {identifier: 'language', type: 'trueOrFalse'}
        case 3:
            return {identifier: 'borders', type: 'trueOrFalse'}
        case 4:
            return {identifier: 'population', type: 'selection'}
        case 5:
            return {identifier: 'region', type: 'trueOrFalse'}
    }
}

function setAnswers(countriesList, question) {
    return question.type == 'selection' ? setAnswersForSelectionQuestions(countriesList) : setAnswersForTrueOrFalseQuestions(countriesList, question.identifier)
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

function setAnswersForTrueOrFalseQuestions(countriesList, identifier) {
    let results = {answers: [], correctAnswer: {}}
    let correctAnswerIndex = Math.floor(Math.random() * 2)

    for(let i=0; i<2; i++) {
        let randomIndex = Math.floor(Math.random() * countriesList.length)
        let raffledCountry = countriesList[randomIndex]
        results.answers.push(raffledCountry)
    }

    if(correctAnswerIndex == 0 && shareSameAnswer(results.answers, identifier) == false) {
        results.correctAnswer = {...results.answers[1], name: results.answers[0].name, trueOrFalse: 'False'}
    }
    else {
        results.correctAnswer = {...results.answers[0], trueOrFalse: 'True'}
    }

    return results
}

function shareSameAnswer(countries, identifier) {
    switch(identifier) {
        case 'language':
            return countries[0].languages == countries[1].languages ? true : false
        case 'borders':
            let shareAnswer = false
            countries[0].borders.map(country => {
                if(countries[1].borders.includes(country)) {
                    shareAnswer = true    
                }
            })
            return shareAnswer
        case 'region':
            return countries[0].region == countries[1].region ? true : false
    }
}
