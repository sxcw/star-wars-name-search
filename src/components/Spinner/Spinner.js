import React from 'react';
import { FaSpinner } from 'react-icons/lib/fa/';
import './Spinner.css';

const Spinner = () => (
  <div style={{ margin: 'auto' }}>
    <FaSpinner className="spinner" />
  </div>
);

export default Spinner;
