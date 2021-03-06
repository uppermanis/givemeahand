import React, { cloneElement } from 'react';
import Header from '../components/Header';
import * as actions from '../actions';


export default class MainLayout extends React.Component {

  constructor() {
    super();

    this.actions = actions;
  }

  bletClick = () => {
      this.actions.addQuestion({blet: 'bleat'});
  }

  render() {
    // {cloneElement(this.props.children, { parent: this })}

    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );

  }
}
