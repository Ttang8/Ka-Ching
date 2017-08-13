import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

class ItemShow extends React.Component {
  render(){
    console.log(this.props);
    const {title, description, price, location} = this.props.navigation.state.params.item;
    console.log(title, description, price, location);
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
    )
  }
}

const styles = StyleSheet.create({
  itemImage: {
    alignSelf: 'stretch'
  }
})

export default ItemShow;
