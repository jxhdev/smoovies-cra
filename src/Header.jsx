// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="search"
      />
    );
  } else {
    utilSpace = <h2>Back</h2>;
  }
  return (
    <header>
      <h1>smoovies</h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
