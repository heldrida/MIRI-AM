import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/index';
import Questions from '../containers/questions';
import Summary from './summary';

require('../../src/sass/app.scss');

class App extends Component {
	componentWillMount() {
		this.props.fetchQuestions();
	}

	render() {
		return (
			<div className="app-container">
				<h1>Questions test</h1>
				{ !this.props.questions.loading && !this.props.children && <Questions /> }
				{ !this.props.questions.loading && this.props.children }				
				{ !this.props.questions.loading && <Summary /> }
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
	questions: React.PropTypes.object,
	children: React.PropTypes.object
};


export default connect(mapStateToProps, matchDispatchToProps)(App);