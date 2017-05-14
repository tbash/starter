import appReducer from '../reducer';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  it('returns the initial state', () => {
    const initState = fromJS({
      user: 'you'
    });

    expect(appReducer(undefined, {})).toEqual(initState);
  });
});
