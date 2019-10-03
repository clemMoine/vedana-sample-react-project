// Libraries
import React from 'react';

// Images
import images from '../../Images';

import './Styles/Sample.less';

function Sample() {
  return (
    <div className="Sample">
      <header className="Sample-header">
        <img src={images.logo} className="Sample-logo" alt="logo" />
        <p>
          Edit <code>src/Views/Sample/Sample.js</code> and save to reload.
        </p>
        <a
          className="Sample-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Sample;
