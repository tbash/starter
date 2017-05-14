import { combineReducers } from 'redux-immutable';

import appReducer from 'containers/App/reducer';

const CLEAR_STATE = '@@react-starter/CLEAR_STATE';

const clearState = () => ({ type: CLEAR_STATE });

const mainReducer = combineReducers({
  app: appReducer,
});

const createReducer = (state, action) =>
  action.type === CLEAR_STATE
    ? mainReducer(undefined, action)
    : mainReducer(state, action);

export default createReducer;
export {
  clearState,
};
