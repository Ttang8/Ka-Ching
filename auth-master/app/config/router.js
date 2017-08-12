import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

import Main from '../components/Main';
import UserProfile from '../components/user/userProfile';
import Items from '../components/item/items';
import TodoList from '../components/TodoList';

export const Tabs = TabNavigator({
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'UserProfile',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
    }
  },

  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Items',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
    }
  },


  TodoList: {
    screen: TodoList,
    navigationOptions: {
      tabBarLabel: 'Interests',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
    }
  }
});
