import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      selected: [],
      itemInfo: this.props.navigation.state.params.itemInfo
    };
    this.handleChoosLocation = this.handleChoosLocation.bind(this);
  }

  handleChoosLocation() {
    this.props.navigation.navigate('Map', {itemInfo: this.state});
  }

  getSelectedImages(images, current) {
    const num = images.length;

    this.setState({num: num, selected: images});
    //
    // console.log(current);
    // console.log("under", this.state.selected);
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker callback={this.getSelectedImages.bind(this)}/>
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
