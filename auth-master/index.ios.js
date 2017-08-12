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

import AppContainer from './app/components/AppContainer';
import {configureStore} from './app/store';

export default class KaChing extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('KaChing', () => KaChing);
