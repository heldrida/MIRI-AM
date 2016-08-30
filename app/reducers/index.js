import { combineReducers } from 'redux';
import questionsReducer from './reducer_questions';
import answerReducer from './reducer_answers';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	questions: questionsReducer,
	answers: answerReducer,
	routing: routerReducer
});

export default rootReducer;