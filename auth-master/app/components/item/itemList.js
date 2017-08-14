import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect } from 'react-redux';
import SwipeCards from './SwipeCards';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(){
    this.props.navigation.navigate('ItemShow', {
      item: this.props.item
    });
  }

  render(){
    const { item } = this.props;

    return (
          <View style={styles.container}>
              <View style={styles.items}>

                <Text style={styles.itemDescription}>
                  Title:&nbsp;{item.title}
                </Text>


                <Text style={styles.itemDescription}>
                  Description:&nbsp;{item.description}
                </Text>

                <Text style={styles.itemDescription}>
                  Price:&nbsp;${item.price}
                </Text>

                <Text style={styles.itemDescription}>
                  {item.category}
                </Text>

              <View>
                <TouchableOpacity onPress={this.showDetail.bind(this)}>
                  <Text style={styles.itemDescription}>
                    Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
    );
  }
}

const styles = StyleSheet.create({
  cards:{
    width: 100,
    height: 100
  },
  itemImage: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },
  itemDescription: {
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 20
  },
  container:{
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  items:{
    justifyContent: 'flex-end'
  }
});


export default connect()(ItemList);
