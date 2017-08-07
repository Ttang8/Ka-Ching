/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './app/components/App';
import {configureStore} from './app/store';

export default class todoListAuth2 extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todoListAuth2', () => todoListAuth2);
