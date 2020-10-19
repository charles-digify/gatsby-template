import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';

import '../styles/Layout.scss';

function Layout({ children })
{
  return (
    <>
      <Header siteTitle="Gatsby"/>
      <div className="content">
        <main>{children}</main>
        <footer className="mt-4">
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
					<br/>
					<a href="https://www.gatsbyjs.com/docs/">Gatsby Docs</a>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
