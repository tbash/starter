/*
 *
 * App
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import selectApp from './selectors';

import H1 from 'components/H1';

export class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <H1>oh hey, {this.props.user}</H1>
      </Wrapper>
    );
  }
}

const mapStateToProps = selectApp();

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
