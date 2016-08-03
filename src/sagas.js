import { fork } from 'redux-saga/effects';
import defaultSaga from './containers/App/sagas';

// Collect Sagas and fork from containers
export default function * root () {
  yield fork(defaultSaga);
}
