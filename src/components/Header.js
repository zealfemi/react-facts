import React from 'react';

export default function Header(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <div className="nav-title">
        <img
          src="./images/react-logo.png"
          className="nav-logo"
          alt="logo"
        />
        <h3>ReactFacts</h3>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div
          className="toggler--slider"
          onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
