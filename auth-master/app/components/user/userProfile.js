import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Octicons'
import Swiper from 'react-native-swiper';
import axios from 'axios';
import {createItem} from '../../actions/itemActions';

// import {createItem} from '../../api/api_util_items';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.createItem({
      "title": "items",
      "description": "i want to cry",
      "price": 50,
      "seller": "598cba08d17f5164b5ba71a2",
    })
  }

  render() {
    const tempUser = {
      name: "dallas",
      age: 30
    }

    return (
      <View style={styles.container}>

        <View style={styles.navContainer}>

          <View style={styles.whitespace}>
          </View>

          <View style={styles.userIcon}>
            <Text>
              <Icon name='person' size={30} color='grey' />
            </Text>
          </View>

          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View style={styles.kachingIcon}>
              <Text>
                kaching
              </Text>
            </View>
          </TouchableWithoutFeedback>
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
    flex: 1,
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
    alignItems: 'center'
  },
  whitespace: {
    flex: 1,
    backgroundColor: 'green'
  },
  userIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kachingIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default connect(null, { createItem })(UserProfile);