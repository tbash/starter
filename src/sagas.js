import { all, /* fork */ } from 'redux-saga/effects';
// import appSaga from './containers/App/sagas';

// Collect Sagas and fork from containers
export default function * root () {
  yield all([
    //    fork(appSaga),
  ]);
}
