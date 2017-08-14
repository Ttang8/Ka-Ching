import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

import Main from '../components/Main';
import InterestSwipe from '../components/swiper_components/interests';
import ItemSwipe from '../components/swiper_components/items';
import UserSwipe from '../components/swiper_components/user_profile';

import UserProfileContainer from '../components/user/UserProfileContainer';
import Items from '../components/item/items';
import InterestContainer from '../components/interest/Interest_container';
import EditUserContainer from '../components/user/EditUserContainer';
import EditUserSettingContainer from '../components/user/EditUserSettingContainer';

import Map from '../components/map/map';
import ItemSubmitFormContainer from '../components/photo/ItemSubmitFormContainer';
import Photo from '../components/photo/photo';
import UploadItem from '../components/photo/UploadItem';

import ItemShow from '../components/item/itemShow';


export const Tabs = TabNavigator({
  UserProfileContainer: {
    screen: UserProfileContainer,
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
    screen: InterestContainer,
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

export const ItemShowStack = StackNavigator({
  ItemShow: {
    screen: ItemShow,
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

export const UploadItemStack = StackNavigator({
  UploadItem: {
    screen: UploadItem,
    navigationOptions: {
      title: 'Enter Details'
    }
  },

  Map: {
    screen: Map,
    navigationOptions: {
      title: 'Choose Location'
    }
  },

  Photo: {
    screen: Photo,
    navigationOptions: {
      title: 'Choose Photos'
    }
  },

  ItemSubmitFormContainer: {
    screen: ItemSubmitFormContainer,
    navigationOptions: {
      title: 'Submit'
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  },

  UploadItemStack: {
    screen: UploadItemStack
  },

  ItemShow: {
    screen: ItemShowStack
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
