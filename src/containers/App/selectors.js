import { createSelector } from 'reselect';

/**
 * Direct selector to the app state domain
 */
const selectAppDomain = () => state => state.get('app');

/**
 * Other specific selectors
 */


/**
 * Default selector used by App
 */

const selectApp = () => createSelector(
  selectAppDomain(),
  substate => ({
    user: substate.get('user')
  })
);

export default selectApp;
export {
  selectAppDomain,
};
