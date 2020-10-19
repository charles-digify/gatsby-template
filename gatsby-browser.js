import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './src/styles/defaults.css';
import './src/styles/global.scss';

import { Layout } from './src/components/Layout';

export function wrapPageElement({ element, props })
{
	return (
		<Layout {...props}>{element}</Layout>
	);
}
