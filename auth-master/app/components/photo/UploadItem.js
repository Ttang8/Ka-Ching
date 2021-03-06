import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class UploadItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: 0
    };
    this.handleChooseImage = this.handleChooseImage.bind(this);

    navigator.geolocation.getCurrentPosition((pos)=>{
     this.latitude = pos.coords.latitude;
     this.longitude = pos.coords.longitude;
   });
  }

  handleChooseImage() {
    this.userPosition = {
      lat: this.latitude,
      lng: this.longitude
    };
    this.props.navigation.navigate('Photo', {itemInfo: this.state, userPosition: this.userPosition});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding}>

        </View>
        <Text style={styles.title}>&nbsp;&nbsp;Title:</Text>
        <View style={styles.field}>
          <TextInput value={this.state.title}
            onChangeText={(title) => this.setState({title})}
            placeholder="ex: Chair"
            style={styles.textInput}/>
        </View>
        <Text style={styles.title}>&nbsp;&nbsp;Description:</Text>
        <View style={styles.field}>
          <TextInput value={this.state.description}
            onChangeText={(description) => this.setState({description})}
            placeholder="ex: Sturdy, green"
            style={styles.textInput}/>
        </View>
        <Text style={styles.title}>&nbsp;&nbsp;Price:</Text>
        <View style={styles.field}>
          <TextInput keyboardType={'numeric'}
            onChangeText={(price) => this.setState({price})}
            placeholder="ex: 599"
            style={styles.textInput}/>
        </View>
        <TouchableOpacity onPress={this.handleChooseImage}>
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
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: '#2ecc71'
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
    color: 'white'
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

export default UploadItem;
