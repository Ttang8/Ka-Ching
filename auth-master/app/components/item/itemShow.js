import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

class ItemShow extends React.Component {
  render(){
    const {title, description, price, location} = this.props.navigation.state.params.item;
    return (
      <View>
        <View>
          <Image source={require('../../images/dallas.jpg')} style={styles.itemImage} resizeMode={Image.resizeMode.cover}/>
        </View>

        <View>
          <Text>
            {title}
            {description}
            {price}
            {location}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    alignSelf: 'stretch'
  }
});

export default ItemShow;
