import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  onSelectorClick(operator) {
    if (operator === 'minus' && this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    } else if (operator === 'plus') {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <div className="Form__container row">
        <h2 className="Form__container--heading">No. of Paragraphs</h2>
        <div className="Form__selector-container col-sm-12">
          <div className="Form__selectors" onClick={() => this.onSelectorClick('minus')}>
            <span className="Form__selector-operators">-</span>
          </div>
          <p className="Form__count">{this.state.count}</p>
          <div className="Form__selectors" onClick={() => this.onSelectorClick('plus')}>
            <span className="Form__selector-operators">+</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
