import React, { Component } from "react";

import { connect } from "react-redux";
import simpleAction from "./actions/simpleAction";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // eslint-disable-next-line no-shadow
  simpleAction = ({ simpleAction }) => {
    simpleAction();
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <button type='button' onClick={this.simpleAction}>
            Test redux action
          </button>
          <img src={logo} className='App-logo' alt='logo' />
          <pre>{JSON.stringify(this.props)}</pre>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
