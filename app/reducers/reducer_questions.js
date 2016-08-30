import { FETCH_QUESTIONS, SET_ACTIVE_QUESTION } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = {
	loading: true,
	list: [],
	active: 0

};

export default function(state = INITIAL_STATE, action) {

	switch (action.type) {

		case FETCH_QUESTIONS:

			return Object.assign({}, state, {
				loading: false,
				list: action.payload
			});

		break;

		case SET_ACTIVE_QUESTION:

			// retrieve the active question by the route param `question id`
			let question_id = parseInt(action.payload);
			let question = _.find(state.list, function (question) {
				return question.id === question_id;
			});

			return Object.assign({}, state, {
				active: question
			});

		break;

		default:
			return state;

	}

};