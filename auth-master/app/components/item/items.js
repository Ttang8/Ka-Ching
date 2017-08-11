import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../../actions/itemActions'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import UserProfile from '../user/userProfile';

import FontAwesome, { Icons } from 'react-native-fontawesome'

class Items extends Component {
  componentDidMount(){
  }

  toUserProfile() {

  }

  toUserInterest() {
    console.log('render user interest component');
  }

  addToInterest() {
  }

  next() {
    console.log('next iteration through list of items')
  }

  showDetail() {
    console.log('render show page for item')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* left this part so that we can implement in our user profile page  */}
        {/* <TouchableOpacity onPress={this.onLogout}> */}
        {/* <Text>
            Logout
          </Text> */}
        {/* </TouchableOpacity> */}
        <View style={styles.navContainer}>

          <TouchableWithoutFeedback onPress={this.toUserProfile.bind(this)}>
            <View>
              <Text>
                <Icon name='person' size={30} color='grey' />
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View>
            <Text>
              kaching
            </Text>
          </View>

          <TouchableWithoutFeedback onPress={this.toUserInterest.bind(this)}>
            <View>
              <Text>
                interest
            </Text>
            </View>
          </TouchableWithoutFeedback>

        </View>

        <Image source={require('../../images/dallas.jpg')} style={styles.itemImage} resizeMode={Image.resizeMode.cover}>

          <TouchableOpacity onPress={this.showDetail.bind(this)}>
            <View style={styles.itemsContainer}>

              <View style={styles.itemsDetail}>

                <Text style={styles.itemDescription}>
                  no
                </Text>

                <Text style={styles.itemDescription}>
                  no
                </Text>

                <Text style={styles.itemDescription}>
                  no
                </Text>

                <Text style={styles.itemDescription}>
                  no
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
          <TouchableOpacity onPress={this.addToInterest.bind(this)}>
            <Text>
              yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next.bind(this)}>
            <Text>
              no
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


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

const mapStateToProps = state => {
  return {
    item: state.item,
  }
}

module.exports = connect(mapStateToProps)(Items);
