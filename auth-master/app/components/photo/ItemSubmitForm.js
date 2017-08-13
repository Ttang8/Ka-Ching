import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MapView from "react-native-maps";

class ItemSubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInfo: this.props.navigation.state.params.itemInfo.itemInfo
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.navigation.navigate('UserProfile');
  }

  render() {
    const {title, description, price} = this.state.itemInfo;
    console.log(title);

    return (
      <View>
        <MapView initialRegion={{
          latitude: this.props.navigation.state.params.itemInfo.region.latitude,
          longitude: this.props.navigation.state.params.itemInfo.region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }} style={styles.map}>
          <MapView.Marker coordinate={{
            latitude: this.props.navigation.state.params.itemInfo.region.latitude,
            longitude: this.props.navigation.state.params.itemInfo.region.longitude
          }}/>
        </MapView>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
        <View>
          <Text>{price}</Text>
        </View>
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>
            Submit
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

export default ItemSubmitForm;
