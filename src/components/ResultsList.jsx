import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchTerm } from '../redux/selectors/selectorsNameSearch';
import image from '../assets/graphics/vader-icon.svg';
import { capitalize } from '../utils/helpers';

export default connect(state => ({
  searchTerm: getSearchTerm(state)
}))(class ResultsList extends Component {
  renderPeople = () => {
    const { people } = this.props;

    return (
      people.map(p => (
        <li key={p.get('name')} className='results-list-item'>
          {this.renderPersonDetails(p)}
        </li>
      ))
    )
  }

  renderPersonDetails = (p) => {
    return (
      <div className='results-list-item-details'>
        <div className='results-list-item-details-name'>{p.get('name')}</div>
        <div className='results-list-item-details-traits'>
          <span>{capitalize(p.get('gender'))}</span>
          <span>{this.renderTraits(p.get('hair_color'), 'Hair')}</span>
          <span>{this.renderTraits(p.get('eye_color'), 'Eyes')}</span>
        </div>
      </div>
    )
  }

  renderTraits = (t, part) => {
    if (!t || t === 'unknown' || t === 'none') {
      return '';
    }

    const seperator = String.fromCharCode(183);

    return ` ${seperator} ${capitalize(t)} ${part}`;
  }

  renderNoResults = () => {
    return (
      <div className='results-list' style={{ minHeight: '250px' }}>
        <div className='results-list-image'>
          <img
            src={image}
            alt="no results" />
        </div>
        <div className='results-list-message'>
          Search by Character Name
        </div>
      </div>
    )
  }

  render = () => {
    const { people } = this.props;

    if (!people.size) {
      return this.renderNoResults();
    }

    return (
      <div className='results-list'>
        <ul>
          {this.renderPeople()}
        </ul>
      </div>
    );
  }
});
