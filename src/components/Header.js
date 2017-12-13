import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>
      <Link to="/">
        NAME SEARCH
      </Link>
    </h1>
  </header>
);

export default Header;
