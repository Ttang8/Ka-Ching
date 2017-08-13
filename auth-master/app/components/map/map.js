import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.handleItemSubmitForm = this.handleItemSubmitForm.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  handleItemSubmitForm() {
    this.props.navigation.navigate('ItemSubmitForm');
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          style={styles.map}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
            }}
          />
        </MapView>
        <TouchableOpacity onPress={this.handleItemSubmitForm}>
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
    justifyContent: "center",
    alignItems: "stretch"
  },
  map: {
    position: "absolute",
    flex: 1,
    width: 300,
    height: 300
  }
});
