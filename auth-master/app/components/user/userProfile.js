import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

import Swiper from 'react-native-swiper';

class UserProfile extends React.Component{
   constructor(props){
    super(props);
  }

  render(){
    const tempUser={
      name: "dallas",
      age: 30
    }
  
    return(
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.whitespace}>
          </View>
          <View style={styles.userIcon}>
            <Text>
              user
            </Text>
          </View>
          <View style={styles.kachingIcon}>
            <TouchableOpacity>
              <Text>
                kaching
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.user}> 
            <Image source={require('../../images/dallas.jpg')} style={styles.userImage} />
            <Text>
              {tempUser.name}, {tempUser.age}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              <TouchableOpacity>
                <Text>
                  Setting
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={styles.functionContainer}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 10,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  navContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  whitespace: {
    flex:1
  },
  userIcon: {
    flex: 1
  },
  kachingIcon: {
    flex: 1
  },
  userInfoContainer: {
    flex: 11,
    alignSelf: 'stretch',
    overflow: 'hidden',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  functionContainer: {
    flex: 8,
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch'
  }
});

export default UserProfile;