// fix sticky hover in touch devices
document.documentElement.className = 'ontouchstart' in document.documentElement ? '' : 'hover';

import React from 'react';
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import routes from './config/routes';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history } routes={ routes } />
	</Provider>,
    document.getElementById('app')
);