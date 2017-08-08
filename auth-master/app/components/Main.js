import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome'
import { unauthUser } from '../actions';
import Items from './item/items';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex:1,
    backgroundColor: '#97CAE5',
    alignSelf: 'stretch'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var Main = React.createClass({
  render: function () {
    return (
      <Swiper style={styles.wrapper} index={1} showsPagination={false} loop={false} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>User profile page</Text>
        </View>
        <View style={styles.slide2}>
          <Items />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Interest component</Text>
        </View>
      </Swiper>
    )
  }
})



module.exports = connect()(Main);
