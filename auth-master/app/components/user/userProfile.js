import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import {createItem} from '../../actions/itemActions';
import UserGreeting from '../greeting/UserGreeting';

// import {createItem} from '../../api/api_util_items';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.goToSettings = this.goToSettings.bind(this);
    console.log(this.props.navigation);
  }

  goToSettings() {
    this.props.navigation.navigate('EditUser');
  }

  handlePress(){
    this.props.createItem({
      "title": "items",
      "description": "i want to cry",
      "price": 50,
      "seller": "598cba08d17f5164b5ba71a2",
    });
  }

  render() {
    const tempUser = {
      name: "dallas",
      age: 30
    };

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>

          <TouchableOpacity onPress={this.onLogout}>
            <Icon name='x' size={20} color='white'/>
          </TouchableOpacity>
          <View style={styles.whitespace}>
          </View>

          <TouchableOpacity style={styles.icons} onPress={this.onLogout}>
            <Icon name='device-mobile' size={20} color='white'/>
          </TouchableOpacity>

        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.user}>
            <Image source={require('../../images/dallas.jpg')} style={styles.userImage} />
            <Text style={styles.nameStyles}>
              {tempUser.name}, {tempUser.age}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.icons} onPress={this.goToSettings}>
              <Icon name='gear' size={20} color='white'/>
              <Text style={styles.title}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.icons} onPress={this.onLogout}>
              <Icon name='pencil' size={20} color='white'/>
              <Text style={styles.title}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.functionContainer}>
            <Swiper style={styles.wrapper} index={0} loop={false} activeDotColor={'white'} showsButtons={false}>
              <View style={styles.slide1}>
                <UserGreeting/>
              </View>
              <View style={styles.slide2}>
                <UserGreeting/>
              </View>
              <View style={styles.slide3}>
                <UserGreeting/>
              </View>
            </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2ecc71'
  },
  navContainer: {
    flex: 1,
    backgroundColor: '#2ecc71',
    paddingTop: 10,
    paddingBottom: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userInfoContainer: {
    flex: 11,
    alignSelf: 'stretch',
    overflow: 'hidden',
    backgroundColor: '#2ecc71',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: 'white'
  },
  nameStyles: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 27,
    paddingTop: 10,
    fontWeight: '500',
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    height: 100,
    alignItems: 'center',
    backgroundColor: '#25A35A'
  },
  functionContainer: {
    flex: 8,
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch'
  },
  title:{
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(null, { createItem })(UserProfile);
