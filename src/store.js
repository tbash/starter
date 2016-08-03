import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
import createReducer from './reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
  const middlewares = [
    routerMiddleware(browserHistory),
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
