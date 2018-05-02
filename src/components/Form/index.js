import React, { Component } from 'react';
import './Form.css';

const Form = props => {
    return (
      <div className="Form__container row">
        <h2 className="Form__container--heading">No. of Paragraphs</h2>
        <div className="Form__selector-container col-sm-12">
          <div className="Form__selectors" onClick={() => props.onCountChange('minus')}>
            <span className="Form__selector-operators">-</span>
          </div>
          <p className="Form__count">{props.count}</p>
          <div className="Form__selectors" onClick={() => props.onCountChange('plus')}>
            <span className="Form__selector-operators">+</span>
          </div>
        </div>
      </div>
    );
};

export default Form;
