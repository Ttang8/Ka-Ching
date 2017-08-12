import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/itemActions';
import { editUser } from '../../actions/userActions';
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

import FontAwesome, { Icons } from 'react-native-fontawesome';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.auth.user_id,
      buy: this.props.auth.buy,
      sell: this.props.auth.sell,
    };
    this.counter = 0;
  }
  componentDidMount(){
    this.props.fetchItems();
  }

  toUserProfile() {

  }

  toUserInterest() {
    // console.log('render user interest component');
  }

  addToInterest() {
    const item = this.props.items[this.counter];
    console.log(item);
    const buy = this.state.buy;
    buy.push(item._id);
    this.setState({
      buy: buy
    });
    console.log(this.state);
    this.props.editUser(this.state).then(()=> this.counter++);
  }

  next() {
<<<<<<< HEAD
    // console.log('next iteration through list of items')
=======
    this.counter++;
>>>>>>> fe0c2d86241fd178902d025cecbedf77bd3cf88d
  }

  showDetail() {
    // console.log('render show page for item')
  }

  render() {
<<<<<<< HEAD
    // console.log("ANDREW", this.props.auth);
=======
    console.log(this.props);
>>>>>>> fe0c2d86241fd178902d025cecbedf77bd3cf88d
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
    items: state.items,
    item: state.item,
    auth: state.auth
  }
}

module.exports = connect(mapStateToProps, {fetchItems, editUser })(Items);
