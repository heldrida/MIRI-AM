import React from 'react';
import { Link } from 'react-router';
const logo = require('../../src/images/miriam-happy-logo.png');

const Home = () => (
	<div className='home'>
		<p><span className='miriam'>Mir'iam</span> <span>wants you to help her find you a</span> <span>delicious</span> <span>fruit...</span></p>
		<div>
			<img className='logo' src={ logo } />
		</div>
		<div>
			<Link className='cta' to={ '/question/1' }>Click here to help!</Link>
		</div>
	</div>
);

export default Home;