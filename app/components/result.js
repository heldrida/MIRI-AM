import React from 'react';
import { connect } from 'react-redux';

const calcScore = (answers) => {
	let avg = answers.reduce((sum, obj) => {
		return sum + obj.answer_id;
	}, 0);
	return Math.ceil(avg / answers.length);
}

const Result = ({ answers }) => (
	<div>result { calcScore(answers) }</div>
);

function mapStateToProps(state) {
	return {
		answers: state.answers
	}
}

export default connect(mapStateToProps)(Result);