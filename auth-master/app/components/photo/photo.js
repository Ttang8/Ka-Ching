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

    this.userPosition = this.props.navigation.state.params.userPosition;
    this.handleChoosLocation = this.handleChoosLocation.bind(this);
  }

  handleChoosLocation() {
    this.props.navigation.navigate('Map', {itemInfo: this.state, userPosition: this.userPosition});
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
          <View style={styles.center}>
            <Text style={styles.button}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2ecc71'
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  field: {
    borderRadius: 5,
    padding: 10,
    paddingLeft: 8,
    margin: 7,
    marginTop: 10,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: '#2ecc71',
    padding: 10
  },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  padding: {
    padding: 10
  }
});
