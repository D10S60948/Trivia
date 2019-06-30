import { ADD_COUNTRY_TO_LIST, SET_NOT_READY,  RESET_ANSWERS_AND_QUESTIONS, SET_SUBJECTS } from '../types';

export const addCountry = (country) => {
    return {
        type: ADD_COUNTRY_TO_LIST,
        payload: country
    }
}

export const setNotReady = () => {
    return {
        type: SET_NOT_READY
    }
}

export const resetAnwersAndQuestion = () => {
    return {
        type: RESET_ANSWERS_AND_QUESTIONS
    }
}

export const setSubjects = (questions) => {
    return {
        type: SET_SUBJECTS,
        payload: questions
    }
}