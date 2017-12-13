import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';

export default connect(state => ({
}))(class AppContainer extends Component {
  render = () => {
    return (
      <div className="app-container">
        <SearchContainer />
        <ResultsContainer />
      </div>
    );
  }
});
