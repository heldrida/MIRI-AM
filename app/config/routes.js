import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import Question from '../containers/question';

const routes = (
	<Route path='/' component={ App }>
		<Route path="question/:question_id" component={ Question } />
	</Route>
);

export default routes;