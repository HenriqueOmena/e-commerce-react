import React, { Component } from 'react'

import './forn-input.style.scss';

const FormInput = ({ handleChange, label, ...restOfProps}) => (
    <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          {...restOfProps}
          />
          {
              label ?
              <label className={ `${restOfProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
              </label>
              : null
          }
    </div>
)

export default FormInput;
