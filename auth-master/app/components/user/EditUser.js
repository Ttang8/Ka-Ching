import React, {Component} from 'react';
import {View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class EditUser extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.user.user_id,
      username: this.props.user.username || "",
      firstName: this.props.user.firstName || "",
      lastName: this.props.user.lastName || ""
    };
    this.handleEditUser = this.handleEditUser.bind(this);
  }

  handleEditUser() {
    let user = this.state;
    this.props.editUser(user)
      .then(() => this.props.navigation.navigate('UserProfile'));
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.field}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            placeholder="Username"
            style={styles.textInput}/>
        </View>
        <View style={styles.field}>
          <TextInput
            value={this.state.firstName}
            onChangeText={(firstName) => this.setState({firstName})}
            placeholder="First Name"
            style={styles.textInput}/>
        </View>
        <View style={styles.field}>
          <TextInput
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState({lastName})}
            placeholder="Last Name"
            style={styles.textInput}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  onPress={this.handleEditUser}>
            <Text style={styles.button}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2ecc71"
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  field: {
    borderRadius: 5,
    padding: 5,
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
    fontSize: 30,
    color: 'white'
  }
});

export default EditUser;
