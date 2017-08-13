import React, {Component} from 'react';
import {View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class UploadItem extends Component{
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChooseImage = this.handleChooseImage.bind(this);
  }

  handleChooseImage(){
    this.props.navigation.navigate('Photo');
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.handleChooseImage}>
          <Text>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UploadItem;
