import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/index';
import Home from '../components/home';
import Summary from './summary';

require('../../src/sass/app.scss');

class App extends Component {
	componentWillMount() {
		this.props.fetchQuestions();
	}

	cacheModule() {
		const avocado = require('../../src/images/avocado.png')
		const orange = require('../../src/images/orange.png')
		const strawberry = require('../../src/images/strawberry.png')
		const blueberries = require('../../src/images/blueberries.png')
		const date = Date.now()

		return	(
			<div className='cache hidden'>
				<img src={ avocado + '?' + date } />
				<img src={ orange + '?' + date } />
				<img src={ strawberry + '?' + date } />
				<img src={ blueberries + '?' + date } />
			</div>
		)
	}

	render() {
		return (
			<div className="app-container">
				{ this.props.children }
				{ this.cacheModule() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchQuestions: fetchQuestions
	}, dispatch);
}

App.propTypes = { 
	fetchQuestions: React.PropTypes.func,
	home: React.PropTypes.object,
	children: React.PropTypes.object
};


export default connect(mapStateToProps, matchDispatchToProps)(App);