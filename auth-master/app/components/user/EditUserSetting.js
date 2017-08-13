import React, {Component} from 'react';
import {View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class EditUserSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Settings
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
    color: 'white',
    padding: 10
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

export default EditUserSetting;
