import React, {Component} from 'react';
import {connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import FontAwesome, {Icons} from 'react-native-fontawesome'

var Items = React.createClass({
  // onLogout: function() {
  //   this.props.dispatch(unauthUser);
  // },
  toUserProfile: function () {
    console.log('render user profile component');
  },

  toUserInterest: function () {
    console.log('render user interest component');
  },

  addToInterest: function () {
    console.log('create association with user and interest table')
  },

  next: function () {
    console.log('next iteration through list of items')
  },

  showDetail: function(){
    console.log('render show page for item')
  },

  render() {
    const tempItem = {
      image_url: {},
      price: "$10.00",
      title: "Dallas",
      location: "San Francisco",
      description: "smart as f***"
    }
    return (
      <View style={styles.container}>
        {/* left this part so that we can implement in our user profile page  */}
        {/* <TouchableOpacity onPress={this.onLogout}> */}
        {/* <Text>
            Logout
          </Text> */}
        {/* </TouchableOpacity> */}
        <View style={styles.navContainer}>
          <View>
            <TouchableOpacity onPress={this.toUserProfile}>
              <Text>
                user
            </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>
              kaching
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.toUserInterest}>
              <Text>
                interest
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={require('../../images/dallas.jpg')} style={styles.itemImage} resizeMode={Image.resizeMode.cover}>
          <TouchableOpacity onPress={this.showDetail}>
            <View style={styles.itemsContainer}>
              <View style={styles.itemsDetail}>
                <Text style={styles.itemDescription}>
                  {tempItem.title}
                </Text>
                <Text style={styles.itemDescription}>
                  {tempItem.description}
                </Text>
                <Text style={styles.itemDescription}>
                  {tempItem.price}
                </Text>
                <Text style={styles.itemDescription}>
                  {tempItem.location}
                </Text>
              </View>
              <View style={styles.more}>
                <Text style={styles.itemDescription}>
                  details
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Image>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addToInterest}>
            <Text>
              yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next}>
            <Text>
              no
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 6,
    paddingRight: 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingBottom: 10,
    paddingTop: 10
  },
  itemImage: {
    marginTop: 10,
    flex: 4.5,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    padding: 10
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  itemsDetail: {

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  itemDescription: {
    color: 'white',
    fontWeight: 'bold'
  }
});

module.exports = connect()(Items);