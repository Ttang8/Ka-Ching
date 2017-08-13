import React, {Component} from 'react';
import {View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class ItemSubmitForm extends Component{
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.navigation.navigate('UserProfile');
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemSubmitForm;
