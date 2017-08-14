# Ka-Ching

[Ka-Ching Demo Page][Ka-Ching]


Ka-Ching is a mobile application. It allows users to post, sell, and buy items.

This project was blueprinted and created with a 7 day deadline using React Native, Node.js, Express, Mongo Database, Mongoose.

Ka-Ching is a collaborative project created by:

Howard Feger - [Github Link][Howard Feger]  
Joey Jirasevijinda - [Github Link][Joey Jirasevijinda]  
Geewon Lee - [Github Link][Geewon Lee]  
Terrence Tang - [Github Link][Terrence Tang]  

## Technology

Ka-Ching was built using the industry standard MERN stack(MongoDB/Express/React/Node.js).  Node.js, Express, and Mongoose are used on the back-end. Node.js is a server framework written in JavaScript. Express and Mongoose help build a RESTful API to define the routes for the application. MongoDB as a database in conjunction with Express, and Node handle the data storage. React Native is a front-end framework for building on the mobile platform building off of React and JavaScript for its reusable modular code along. Redux cycle was used with React Native to provide a unidirectional data flow.

## Features & Implementation

- Secure front-end and back-end user authentication.
- Ability to upload items to sell or remove from posting.
- Ability to add items to interest list to buy items from seller.
- Click items to see item details.
- Explore what other users are posting in an index page.

### React Navigation
Using React Navigation, Ka-Ching can offer seamless navigation between its components.
```ruby
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
```

### React Swiper
React Swiper detects and triggers touch events for swiping left and right rendering several components on a single page.
```ruby
<Swiper style={styles.wrapper} index={0} loop={false} activeDotColor={'white'} showsButtons={false}>
  <View style={styles.slide1}>
    <UserGreeting/>
  </View>
  <View style={styles.slide2}>
    <UserGreeting2/>
  </View>
  <View style={styles.slide3}>
    <UserGreeting3/>
  </View>
</Swiper>
```

### React Native Maps
React Native Maps allows items to be put up for sale based on their geo-location.
```ruby
<MapView region={this.state.region}
         onRegionChange={this.onRegionChange}
         style={styles.map}
         showsUserLocation={true}
         loadingEnabled={true}>
  <MapView.Marker coordinate={{
    latitude: this.state.region.latitude,
    longitude: this.state.region.longitude
  }}/>
```
<img src="./auth-master/pictures/location.png" width="600">

### Future Direction for Project
In the future we plan to implement notifications of new items, categories to search items, chat between seller and buyer, a cart to purchase items, the ability to add photos to items, and the ability to search for items.
