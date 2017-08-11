import React from 'react';
import {Text, View, Image} from 'react-native';

const UserGreeting = () => {
  const { textStyle, viewStyle, photo } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Place Cool TidBits Here!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative',
    flex: 1
    },
  textStyle: {
    fontSize: 18,
    padding: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10

  },
  photo: {
    height: 250,
    width: 200,
    borderRadius: 10
  }
};

export default UserGreeting;
