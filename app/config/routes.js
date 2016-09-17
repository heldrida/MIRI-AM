import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import Question from '../containers/question';
import Home from '../components/home';

const routes = (
	<Route path='/' component={ App }>
		<IndexRoute component={ Home } />
		<Route path="question/:question_id" component={ Question } />
	</Route>
);

export default routes;