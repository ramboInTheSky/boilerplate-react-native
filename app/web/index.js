import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import Hello from './components/Hello';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(combineReducers(reducers))}>
    <Hello appName="to the Amido React Native boilerplate" />
  </Provider>,
  document.getElementById('root')
);
