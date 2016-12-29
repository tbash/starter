import { combineReducers } from 'redux-immutable';

import app from './containers/App/reducer';

export default function createReducer() {
  return combineReducers({
    app,
  });
}
