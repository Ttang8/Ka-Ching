import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

import Main from '../components/Main';

export const Tabs = TabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
    }
  }
});
