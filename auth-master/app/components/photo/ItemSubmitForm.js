import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MapView from "react-native-maps";

class ItemSubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInfo: this.props.navigation.state.params.itemInfo.itemInfo
    };

    this.userPosition = this.props.navigation.state.params;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let newItem = {
      title: this.state.itemInfo.title,
      description: this.state.itemInfo.description,
      price: this.state.itemInfo.price,
      geometry: { type: 'Point', coordinates: [this.props.navigation.state.params.itemInfo.region.longitude, this.props.navigation.state.params.itemInfo.region.latitude]},
      seller: this.props.user.user_id
    };

    let position = this.userPosition;
    this.props.createItem(newItem, position)
      .then(this.props.fetchItems(this.userPosition))

      .then(()=> this.props.navigation.navigate('UserProfileContainer'));
  }

  render() {
    const {title, description, price} = this.state.itemInfo;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.paddingTop}>
            <Text style={styles.title}>Item Summary:</Text>
          </View>
          <View style={styles.field}>
            <Text>Title:&nbsp;{title}</Text>
          </View>
          <View style={styles.field}>
            <Text>Description:&nbsp;{description}</Text>
          </View>
          <View style={styles.field}>
            <Text>Price:&nbsp;{price}</Text>
          </View>
          <View style={styles.padding}>

          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>
            Location
          </Text>
        </View>
        <View style={styles.container}>
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
        </View>
        <TouchableOpacity onPress={this.handleSubmit}>
          <View style={styles.center}>
          <Text style={styles.button}>
            Submit
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
    backgroundColor: '#2ecc71'
  },
  map: {
    position: "absolute",
    flex: 1,
    width: 500,
    height: 300,
    paddingLeft: 50
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center'
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
    color: 'white',
    paddingBottom: 5
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
    padding: 10
  },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  padding: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paddingTop: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ItemSubmitForm;
