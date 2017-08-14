import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

import MapView from "react-native-maps";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      itemInfo: this.props.navigation.state.params.itemInfo.itemInfo
    };
    this.userPosition = this.props.navigation.state.params.userPosition;
    this.onRegionChange = this.onRegionChange.bind(this);
    this.handleItemSubmitForm = this.handleItemSubmitForm.bind(this);
  }

  onRegionChange(region) {
    this.setState({region});
  }

  handleItemSubmitForm() {
    this.props.navigation.navigate('ItemSubmitFormContainer', {itemInfo: this.state, userPosition: this.userPosition});
  }

  render() {
    console.log("README", this.state);
    return (
      <View style={styles.container}>
        <MapView region={this.state.region}
                 onRegionChange={this.onRegionChange}
                 style={styles.map}
                 showsUserLocation={true}
                 loadingEnabled={true}>
          <MapView.Marker coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude
          }}/>
        </MapView>
        <TouchableOpacity onPress={this.handleItemSubmitForm}>
          <View style={styles.center}>
            <Text style={styles.title}>
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
    justifyContent: "center",
    alignItems: "stretch"
  },
  map: {
    flex: 1,
    width: 500,
    height: 300,
    paddingLeft: 100
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
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: 10
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
    alignItems: 'stretch',
    fontSize: 30,
    color: 'white',
    backgroundColor: '#2ecc71'
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
