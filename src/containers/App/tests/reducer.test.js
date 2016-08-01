import expect from 'expect';
import appReducer from '../reducer';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  it('returns the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(fromJS({}));
  });
});
