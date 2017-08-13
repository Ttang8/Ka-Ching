import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.handleChoosLocation = this.handleChoosLocation.bind(this);
  }

  handleChoosLocation() {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker callback={this.getSelectedImages}/>
        <TouchableOpacity onPress={this.handleChoosLocation}>
          <Text>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
