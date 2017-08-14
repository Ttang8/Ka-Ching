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
        }
        this.props.fetchInterests(buyItems);
      })
  }




  renderItems() {
    if (this.props.user.buy.length > 0) {
      const { interests } = this.props;
      return (
        <View>
          {interests.map(interest => (
            <TouchableOpacity>
              <Card>
                <CardSection>
                  <Text>
                    {interest.title}
                    {interest.price}
                  </Text>
                </CardSection>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      )
    } else {
      return (
        <View>
          <Text>
            empty
          </Text>
        </View>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Interest
          </Text>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {this.renderItems()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20
  }
});


export default Interest;
