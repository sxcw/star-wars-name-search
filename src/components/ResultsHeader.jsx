import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsFilter from '../components/ResultsFilter';

export default connect(state => ({
}))(class ResultsHeader extends Component {
  render = () => {
    const { people } = this.props;

    return (
      <div className='results-header'>
        <div>
          {people.size} RESULT
        </div>
        <ResultsFilter />
      </div>
    );
  }
});
