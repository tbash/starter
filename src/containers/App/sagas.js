import { take } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  while (true) {
    yield take(DEFAULT_ACTION)
  }
}
