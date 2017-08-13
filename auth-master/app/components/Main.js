import React, {Component} from "react";
import {connect} from "react-redux";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NavigatorIOS,
} from "react-native";

import TodoList from "./TodoList";
import FontAwesome, {Icons} from "react-native-fontawesome";
import {unauthUser} from "../actions";
import Items from "./item/items";
import UserProfile from "./user/userProfile";
import EditUser from './user/EditUser';
import Photo from './photo/photo';
import Icon from 'react-native-vector-icons/Octicons';

import Swiper from "react-native-swiper";

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignSelf: "stretch"
  },
  slide2: {
    flex: 1,
    alignSelf: "stretch"
  },
  slide3: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconsStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var Main = React.createClass({
  render: function() {
    return (
        <Swiper
          style={styles.wrapper}
          index={1}
          ref={(swiper) => {this.swiper = swiper;}}
          showsPagination={false}
          loop={false}
          showsButtons={false}
          >
          <View style={styles.slide1}>
            <Photo />
          </View>
          <View style={styles.slide1}>
            <UserProfile />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(1)}>
                <Icon name='list-unordered' size={35} color='black'/>
                <Text>
                  Items
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(2)}>
                <Icon name='credit-card' size={35} color='black'/>
                <Text>
                  Interests
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.slide2}>
            <Items />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(-1)}>
                <Icon name='person' size={35} color='black'/>
                <Text>
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(1)}>
                <Icon name='credit-card' size={35} color='black'/>
                <Text>
                  Interests
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.slide3}>
            <TodoList />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(-2)}>
                <Icon name='person' size={35} color='black'/>
                <Text>
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconsStyle} onPress={() => this.swiper.scrollBy(-1)}>
                <Icon name='list-unordered' size={35} color='black'/>
                <Text>
                  Items
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>

    );
  }
});

module.exports = connect()(Main);
