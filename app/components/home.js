import React from 'react';
import { Link } from 'react-router';
const logo = require('../../src/images/miriam-happy-logo.png');

const Home = () => (
	<div className='home'>
		<h1>Mir-iam</h1>
		<p>Let <span>Mir-iam</span> guess the kind of fruit you represent!</p>
		<img className='logo' src={ logo } />
		<div>
			<Link className='cta' to={ '/question/1' }>Click here to start!</Link>
		</div>
	</div>
);

export default Home;