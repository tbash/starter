import { take, call, put, select } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  while (true) {
    let def = yield take(DEFAULT_ACTION)
  }
}
