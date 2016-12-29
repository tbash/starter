/*
 *
 * App
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectApp from './selectors';
import './styles.css';

const App = (props) => {
  return (
    <div className="app">
      oh hey
    </div>
  );
}

const mapStateToProps = selectApp();

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
