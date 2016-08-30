import { SET_QUESTION_ANSWER } from '../actions/index';
import _ from 'lodash';

console.log("SET_QUESTION_ANSWER", SET_QUESTION_ANSWER);

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {

	switch (action.type) {

		case SET_QUESTION_ANSWER:

			let user_answers = state.slice();
			var index = _.findIndex(user_answers, function (answer) {
				return answer.question_id === parseInt(action.payload.question_id);
			});

			// user can only answer once
			if (index > -1) {
				return state;
			}

			return [{
				question_id: action.payload.question_id,
				answer_id: action.payload.answer_id,
				correct_answer_id: action.payload.correct_answer_id
			}, ...state];

		break;

		default:
			return state;

	}

};