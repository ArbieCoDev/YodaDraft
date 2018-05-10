import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import './home.css';
import logo from './logo.svg';

export default class Home extends Component {
  render() {
    return (
      <Redirect to="/Admin/Home"/>
    );
  }
}
