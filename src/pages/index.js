import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components/SEO';

import gatsbyAstronaut from '../images/gatsby-astronaut.png';

import '../styles/index.scss';

export default function()
{
	return (
		<>
			<SEO title="Home"/>
			<h1 className="mb-4">Hi people <i className="fas fa-grin"></i></h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>This starter supports SCSS and uses Bootstrap and Font Awesome.</p>
			<p>Now go build something great.</p>
			<small>This starter is not the same as the `gatsby-default-starter`.</small>
			<div className="img-wrapper">
				<img src={gatsbyAstronaut} alt="gatsby-astronaut"/>
			</div>
			<Link to="/page-2/">Go to page 2</Link> <br/>
			<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
		</>
	);
}
