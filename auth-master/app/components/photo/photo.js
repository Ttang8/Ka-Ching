import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Photo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker callback={this.getSelectedImages}/>
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
