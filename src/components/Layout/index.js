import React from 'react';

// css
import './style.css';
function Layout(props) {
  return (
    <div className="layout">
      {props.children}
      <div className="credentials">
        created by{' '}
        <a
          href="https://tousif-ahmed.netlify.app/"
          target="_blank"
          className="creator-name"
          rel="noreferrer"
        >
          Tousif
        </a>{' '}
        -{' '}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          className="challenger-name"
          rel="noreferrer"
        >
          {' '}
          devChallenges.io
        </a>
      </div>
    </div>
  );
}

export default Layout;
