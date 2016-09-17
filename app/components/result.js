import React from 'react';
import { connect } from 'react-redux';

const getFruitPanel = (score) => {
	let tmpl;
	switch(score) {
		case 1:
			const avocado = require('../../src/images/avocado.png');
			tmpl = (
				<div className='avocado'>
					<h3>Mir'iam find out that avocado may help you!</h3>
					<img src={ avocado } />
				</div>
			);
		break;
		case 2:
			const orange = require('../../src/images/orange.png');
			tmpl = (
				<div className='avocado'>
					<h3>Mir'iam find out that Orange may help!</h3>
					<img src={ orange } />
				</div>
			);
		break;
		case 3:
			const strawberry = require('../../src/images/strawberry.png');
			tmpl = (
				<div className='avocado'>
					<h3>Mir'iam find out that strawberry may help!</h3>
					<img src={ strawberry } />
				</div>
			);
		break;
		case 4:
			const blueberries = require('../../src/images/blueberries.png');
			tmpl = (
				<div className='avocado'>
					<h3>Mir'iam find out that blueberries may help!</h3>
					<img src={ blueberries } />
				</div>
			);
		break;
	}
	return tmpl;
}

const calcScore = (answers) => {
	let avg = answers.reduce((sum, obj) => {
		return sum + obj.answer_id;
	}, 0);
	return Math.ceil(avg / answers.length);
}

const Result = ({ answers }) => {
	const score = calcScore(answers);

	return (
		<div className={ 'result' + ' ' + 'score-' + score }>
			{ 
				getFruitPanel(score) 
			}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		answers: state.answers
	}
}

export default connect(mapStateToProps)(Result);