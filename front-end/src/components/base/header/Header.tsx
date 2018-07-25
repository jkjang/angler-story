
import * as React from 'react';
import i18n from 'i18n';
import './Header.scss';

interface HeaderProps {
  onOpen(): void;
}

const Header: React.SFC<HeaderProps> = (props, t) => {
  return (
  <header className="header py-3">
  <div className="row">
    <div className="flex-3 d-flex">
      {/* <a className="text-muted" href="#">

      </a> */}
    </div>
    <div className="flex-3 text-center">
      <a className="header-logo text-dark" href="#">
      {i18n.t('age.label')}
      </a>
    </div>
    <div className="flex-3 d-flex justify-content-end align-items-center">
      <a className="text-muted" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="21" y1="21" x2="15.8" y2="15.8" />
        </svg>
      </a>
      <a className="btn no-outline " href="#" onClick={props.onOpen}>
        Sign in
      </a>
      <a className="btn" href="#">
        Get Started
      </a>
    </div>
  </div>
    </header>);
};

export default Header;
