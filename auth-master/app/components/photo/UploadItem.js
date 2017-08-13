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
  }

  handleChooseImage() {
    this.props.navigation.navigate('Photo', {itemInfo: this.state});
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleChooseImage}>
          <Text>
            Next
          </Text>
        </TouchableOpacity>
        <View style={styles.field}>
          <TextInput value={this.state.title} onChangeText={(title) => this.setState({title})} placeholder="Title" style={styles.textInput}/>
        </View>
        <View style={styles.field}>
          <TextInput value={this.state.description} onChangeText={(description) => this.setState({description})} placeholder="Description" style={styles.textInput}/>
        </View>
        <View style={styles.field}>
          <TextInput keyboardType={'numeric'} onChangeText={(price) => this.setState({price})} placeholder="Price" style={styles.textInput}/>
        </View>
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
    marginTop: 0,
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
