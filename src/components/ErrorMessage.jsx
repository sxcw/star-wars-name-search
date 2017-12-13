import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(state => ({
}))(class ErrorMessage extends Component {
  render = () => {
    return (
      <div className='error'>
        <span>{this.props.error}</span>
      </div>
    )
  }
});
