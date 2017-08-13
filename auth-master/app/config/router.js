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

export const Tabs = TabNavigator({
  UserSwipe: {
    screen: UserSwipe,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
    }
  },

  ItemSwipe: {
    screen: ItemSwipe,
    navigationOptions: {
      tabBarLabel: 'Items',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
    }
  },

  InterestSwipe: {
    screen: InterestSwipe,
    navigationOptions: {
      tabBarLabel: 'Interests',
      tabBarIcon: () => <Icon name='device-mobile' size={35} color='black'/>
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

export const UserProfileStack = StackNavigator({
  UserProfile: {
    screen: UserProfile
  },

  EditUserContainer: {
    screen: EditUserContainerStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
