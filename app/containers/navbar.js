import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.getPreviousParam = this.getPreviousParam.bind(this);
		this.getNextParam = this.getNextParam.bind(this);
		console.log('props', props);
	}

	getPreviousParam() {
		let param;
		param = Math.max(0, parseInt(this.props.question.id) - 1);
		return param;
	}

	getNextParam() {
		let param;
		param = parseInt(this.props.question.id) + 1;
		return param;
	}

	generate() {
		return this.props.questions.list.map((question) => {
			return (
				<li key={ question.id }>
					<Link  to={ '/question/' + question.id }>
					{ question.id }
					</Link>
				</li>
			)
		})
	}

	render() {
		return (
			<div className="navbar-container">
				{
					this.props.questions.active.id > 1 && 
					<Link to={ `/question/${this.getPreviousParam()}` }>Previous</Link>
				}

				<div>
				{
					Object.keys(this.props.questions).length > 0 &&
					<ul>
					{ this.generate() }
					</ul>
				}
				</div>

				{
					this.props.questions.active.id < this.props.questions.list.length &&
					<Link to={ `/question/${this.getNextParam()}` }>Next</Link>
				}				
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	return {
		questions: state.questions,
		question: state.questions.active
	}
}

export default connect(mapStateToProps)(withRouter(Navbar));