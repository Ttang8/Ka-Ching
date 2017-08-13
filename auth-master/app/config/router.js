import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

import Main from '../components/Main';
import InterestSwipe from '../components/swiper_components/interests';
import ItemSwipe from '../components/swiper_components/items';
import UserSwipe from '../components/swiper_components/user_profile';

import UserProfile from '../components/user/userProfile';
import Items from '../components/item/items';
import TodoList from '../components/TodoList';
import EditUserContainer from '../components/user/EditUserContainer';
import EditUserSettingContainer from '../components/user/EditUserSettingContainer';

export const Tabs = TabNavigator({
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => <Icon name='person' size={35} color='black'/>
    }
  },

  Items: {
    screen: Items,
    navigationOptions: {
      tabBarLabel: 'Items',
      tabBarIcon: () => <Icon name='list-unordered' size={35} color='black'/>
    }
  },

  Interests: {
    screen: TodoList,
    navigationOptions: {
      tabBarLabel: 'Interests',
      tabBarIcon: () => <Icon name='credit-card' size={35} color='black'/>
    }
  }
});

export const EditUserContainerStack = StackNavigator({
  EditUserContainer:{
    screen: EditUserContainer,
    navigationOptions: {
      title: 'Edit'
    }
  }
});

export const EditUserSettingContainerStack = StackNavigator({
  EditUserSettingContainer:{
    screen: EditUserSettingContainer,
    navigationOptions: {
      title: 'Setting'
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  },

  EditUserSettingContainer: {
    screen: EditUserSettingContainerStack
  },

  EditUserContainer: {
    screen: EditUserContainerStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
