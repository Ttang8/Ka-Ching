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
    this.props.navigation.navigate('ItemShow', {
      item: this.props.item
    });
  }

  render(){
    const { item } = this.props;

    return (
      <Image source={require('../../images/dallas.jpg')} style={styles.itemImage}>

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


      </Image>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent'

  },
  itemDescription: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 15
  },
  container:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  items:{
    justifyContent: 'flex-end'
  }
});


export default connect()(ItemList);
