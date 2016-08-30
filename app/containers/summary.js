import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Summary extends Component {
	render() {
		return (
			<div className="summary-container">
				<ul>
				{
					this.props.answers.map((answer, k) => {
						return <li key={ k }>
								Your answer for the question nr { answer.question_id },
								is { answer.answer_id === answer.correct_answer_id ? 'correct' : 'incorrect' }
								</li>
					})
				}
				</ul>
			</div>
		);
	}
}


function mapStateToProps(state, ownProps) {
	return {
		answers: state.answers
	}
}

export default connect(mapStateToProps)(Summary);