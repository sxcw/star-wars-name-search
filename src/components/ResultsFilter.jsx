import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../redux/actions/actionsNameSearch';
import { getFilter, getPeople } from '../redux/selectors/selectorsNameSearch';

export default connect(state => ({
  filter: getFilter(state),
  people: getPeople(state)
}))(class ResultsFilter extends Component {
  handleFilter = (e) => {
    if (!e) {
      return;
    }
    this.props.dispatch(setFilter(e.target.value));
  }

  renderCountByGender = (gender) => {
    const { people, filter } = this.props;
    if (people === undefined) {
      return '';
    }

    if (gender === 'male' && filter === 'male') {
      return `(${people.size})`;
    } else if (gender === 'female' && filter === 'female') {
      return `(${people.size})`;
    }

    return '';
  }

  render = () => {
    const { filter } = this.props;

    return (
      <div className='results-filter'>
        <span>GENDER</span>
        <div>
          <select value={filter} onChange={(e) => this.handleFilter(e)}>
            <option value='all'>Filter by Gender</option>
            <option value='male'>Male {this.renderCountByGender('male')} </option>
            <option value='female'>Female {this.renderCountByGender('female')}</option>
          </select>
        </div>
      </div>
    );
  }
});
