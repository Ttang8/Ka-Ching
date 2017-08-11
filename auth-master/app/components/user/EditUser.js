import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class EditUser extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>
            Edit User
          </Text>
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
  }
});

export default EditUser;
