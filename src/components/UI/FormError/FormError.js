import React from 'react';
import './FormError.css';

const FormError = props => (
  <div className="error">
    {props.children}
  </div>
);

export default FormError;
