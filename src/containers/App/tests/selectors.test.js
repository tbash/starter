import { selectAppDomain } from '../selectors';
import { fromJS } from 'immutable';

it('returns the app slice from the state', () => {
  const appState = 'Some string';
  const state = fromJS({ app: appState });
  expect(selectAppDomain()(state)).toEqual(appState);
});
