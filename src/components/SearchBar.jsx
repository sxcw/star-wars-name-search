import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, setError, validateForm } from '../redux/actions/actionsNameSearch';

export default connect(state => ({
}))(class SearchBar extends Component {
  handleInputChange = (e) => {
    const userInput = e.target.value;
    this.props.dispatch(setSearchTerm(userInput));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(setError(''));
    this.props.dispatch(validateForm());
  }

  render = () => {
    const { searchTerm } = this.props;

    return (
      <form>
        <input
          type='text'
          className='search-input'
          value={searchTerm}
          onChange={(e) => this.handleInputChange(e)}
          placeholder='Search by character name'
        />
        <button
          className='search-button'
          type='submit'
          onClick={(e) => this.handleFormSubmit(e)}>
          <span>Search</span>
        </button>
      </form>
    )
  }
});
