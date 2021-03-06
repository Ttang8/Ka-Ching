import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItems, fetchAllItems} from '../../actions/itemActions';
import {editUser, fetchUser} from '../../actions/userActions';
import {fetchInterests} from '../../actions/interestActions';
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
import ItemList from './itemList';

import FontAwesome, {Icons} from 'react-native-fontawesome';

class Items extends Component {
  constructor(props) {
    super(props);



    this.state = {
      items: this.props.items,
      user: {
        user_id: this.props.user.user_id,
        buy: this.props.user.buy,
        sell: this.props.user.sell
      }
    };
    this.renderItemList = this.renderItemList.bind(this);

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.userPosition = {
        lat: this.latitude,
        lng: this.longitude
      };

      // this.props.fetchItems(this.userPosition)
      this.props.fetchAllItems()
      .then(response => {
        this.setState({
          items: response.items.data
        });
      });
    });
    this.props.fetchUser(this.props.auth.user_id);
  }

  addToInterest() {
    const items = [].concat(this.state.items);
    const item = items[0];
    const buy = this.state.user.buy;
    if (this.state.items.length === 0) {
      return alert('there is no more items in your area');
    }

    if (!buy.includes(item._id)) {
      buy.push(item._id);
      this.setState({
        user: {
          user_id: this.props.user.user_id,
          buy: buy,
          sell: this.props.user.sell
        }
      });
      this.props.editUser(this.state.user).then((response) => {
        items.shift();
        this.setState({items: items});
        const buyItems = {
          buyItems: response.user.buy
        };
        this.props.fetchInterests(buyItems);
      });
    } else {
      alert('that item is already in your interest');
      items.shift();
      this.setState({items: items});
    }
  }

  next() {
    if (this.state.items.length > 0 ){
      const items = [].concat(this.state.items);
      items.push(items.shift());
      this.setState({items: items});
    } else {
      alert('there are no more items in your area');
    }
  }

  renderItemList() {
    if (this.state.items === undefined || this.state.items.length === 0) {
      return (
        <View>
          <Text style={styles.none}>
            No Items
          </Text>
        </View>
      );
    } else {
      return <ItemList navigation={this.props.navigation}
                       item={this.state.items[0]}/>;
    }
  }

  render() {
    if (this.state.items === undefined) {
      return (
        <View style={styles.container}>
          <View style={styles.navContainer}>
            <Text>
              kachingLogo
            </Text>
          </View>
          {this.renderItemList()}
          <View style={styles.buttonContainer}></View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Text style={styles.title}>
              Ka-Ching!
            </Text>
          </View>
          <View style={styles.middle}>
            {this.renderItemList()}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.middle}
              onPress={this.addToInterest.bind(this)}>
              <Icon name='plus' size={20} color='white'/>
              <Text style={styles.button}>
                Add to Interest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middle}
              onPress={this.next.bind(this)}>
              <Icon name='x' size={20} color='white'/>
              <Text style={styles.button}>
                Pass
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  none: {
    fontSize: 30
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
    borderRadius: 8
  },
  button: {
    padding: 10,
    backgroundColor: 'transparent',
    fontSize: 20,
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#25A35A'
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2ecc71"
  },
  title: {
    fontSize: 30,
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {items: state.items.data,
    item: state.item,
    auth: state.auth,
    user: state.user};
};

module.exports = connect(mapStateToProps,
  {fetchItems,
    fetchAllItems,
    editUser,
    fetchUser,
    fetchInterests})(Items);
