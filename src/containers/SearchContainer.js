import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchTerm, getErrorMessage, isLoading } from '../redux/selectors/selectorsNameSearch';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';

export default connect(state => ({
  searchTerm: getSearchTerm(state),
  error: getErrorMessage(state),
  isLoading: isLoading(state)
}))(class SearchContainer extends Component {
  render = () => {
    const { searchTerm, error } = this.props;

    return (
      <div className='search-container'>
        <SearchBar searchTerm={searchTerm} />
        <ErrorMessage error={error} />
      </div>
    );
  }
});
