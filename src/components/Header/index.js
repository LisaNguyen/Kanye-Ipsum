import React, { Component } from 'react';
import './Header.css';
import Form from '../Form/index';

class Header extends Component  {
  render() {
    return (
      <div className="Header__container col-lg-6 col-sm-12">
        <h1 className="Header__heading--primary">The words of Kanye: Kanye Ipsum</h1>
        <div className="Header__main-body">
          <p className="Header__heading--main">Kanye Ipsum</p>
          <p className="Header__heading--main Header__heading--main-left">Kanye Ipsum</p>
          <p className="Header__heading--main">Kanye Ipsum</p>
          <p className="Header__heading--main">Kanye Ipsum</p>
          <hr />
          <p className="Header__heading--sub">One of the best Lorem Ipsum generators of all time. Of all time.</p>
          <Form />
        </div>
      </div>
    );
  }
};

export default Header;
