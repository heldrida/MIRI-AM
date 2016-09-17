import data from '../data/questions.js';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';

export function fetchQuestions() {
	return {
		type: FETCH_QUESTIONS,
		payload: data
	}
}

export function setActiveQuestion(question_id) {
	return {
		type: SET_ACTIVE_QUESTION,
		payload: question_id
	}
}

export function saveAnswer(question_id, answer_id) {
	return {
		type: SET_QUESTION_ANSWER,
		payload: {
				question_id: question_id,
				answer_id: answer_id
		}
	}
}

export function setQuestionAnswer(question_id, answer_id) {
	return {
		type: SET_QUESTION_ANSWER,
		payload: {
				question_id: question_id,
				answer_id: answer_id
		}
	}
}