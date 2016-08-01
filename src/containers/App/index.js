/*
 *
 * App
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectApp from './selectors';
import './styles.css';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="app">
      <Helmet
        title="App"
        meta={[
          { name: 'description', content: 'Application' },
        ]}
      />
      {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = selectApp();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
