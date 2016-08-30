import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Questions extends Component {
	render() {
		return (
			<div className="questions-container">
				<ul>
				{
					this.props.questions.map((data) => {
						return <li key={ data.id }>
									<Link to={ `/question/${data.id}` }>{ data.question }</Link>
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
		questions: state.questions.list
	}
}

export default connect(mapStateToProps)(Questions);