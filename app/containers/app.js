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

	render() {
		return (
			<div className="app-container">
			{ this.props.children }
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