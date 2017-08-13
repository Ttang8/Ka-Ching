import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect } from 'react-redux';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(){
    console.log('hi');
  }

  render(){
    console.log(this.props);
    const { item } = this.props
    return (
      <Image source={require('../../images/dallas.jpg')} style={styles.itemImage} resizeMode={Image.resizeMode.cover}>

        <TouchableOpacity onPress={this.showDetail.bind(this)}>
          <View style={styles.itemsContainer}>

            <View style={styles.itemsDetail}>

              <Text style={styles.itemDescription}>
                {item.title}
              </Text>

              <Text style={styles.itemDescription}>
                {item.description}
              </Text>

              <Text style={styles.itemDescription}>
                {item.price}
              </Text>

              <Text style={styles.itemDescription}>
                {item.category}
              </Text>

            </View>

            <View style={styles.more}>
              <Text style={styles.itemDescription}>
                details
              </Text>
            </View>

          </View>
        </TouchableOpacity>

      </Image>
    )
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    padding: 10
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  itemDescription: {
    color: 'white',
    fontWeight: 'bold'
  },
})


export default connect()(ItemList);
