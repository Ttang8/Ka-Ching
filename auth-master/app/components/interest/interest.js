import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput
} from 'react-native';
import { Card, CardSection } from '../common';

class Interest extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.auth.user_id)
      .then(response => {
        const buyItems = {
          buyItems: response.user.buy
        };
        this.props.fetchInterests(buyItems);
      });
  }

  renderItems() {
    if (this.props.user.buy.length > 0) {
      const { interests } = this.props;
      return (
      <View>
        <View>
          {interests.map(interest => (
            <TouchableOpacity key={(Math.random(100000))}>
              <Card>
                <CardSection>
                  <Text>
                    {interest.title}:&nbsp;${interest.price}
                  </Text>
                </CardSection>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      );
    } else {
      return (
        <View>
          <Text>
            empty
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>
            Interest
          </Text>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {this.renderItems()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 30,
    padding: 10
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Interest;
