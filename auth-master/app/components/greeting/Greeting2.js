import React from 'react';
import {Text, View, Image} from 'react-native';

const Greeting2 = () => {
  const { textStyle, viewStyle, photo } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Items populate based on your location!</Text>
      <Image
        style={photo}
        source={require('../../images/map.jpg')}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 340,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative',
    },
  textStyle: {
    fontSize: 18,
    padding: 15,
    alignSelf: 'center',
    justifyContent: 'center'

  },
  photo: {
    height: 250,
    width: 200,
    borderRadius: 10
  }
};

export default Greeting2;
