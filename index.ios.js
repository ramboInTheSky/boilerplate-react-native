import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { AppRegistry } from 'react-native';
import App from './app/native/';
import reducers from './app/reducers';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class boilerplateReactNative extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(combineReducers(reducers))}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('boilerplateReactNative', () => boilerplateReactNative);
