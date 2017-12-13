import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isLoading, getPeople } from '../redux/selectors/selectorsNameSearch';
import ResultsHeader from '../components/ResultsHeader';
import ResultsList from '../components/ResultsList';
import Spinner from '../components/Spinner/Spinner';

export default connect(state => ({
  isLoading: isLoading(state),
  people: getPeople(state)
}))(class ResultsContainer extends Component {
  render = () => {
    const { isLoading, people } = this.props;

    if (isLoading) {
      return <Spinner />
    }

    return (
      <div className='results-container'>
        <ResultsHeader people={people} />
        <ResultsList people={people} />
      </div>
    );
  }
});
