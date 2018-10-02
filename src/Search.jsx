// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard key={show.imdbID} {...show} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
