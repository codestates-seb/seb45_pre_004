export const GET_QUESTIONS_LIST = 'GET_QUESTIONS_LIST'

export const getQuestionsListActon = (questionsList) => {
    return {
        type: GET_QUESTIONS_LIST,
        payload: questionsList,
    }
}