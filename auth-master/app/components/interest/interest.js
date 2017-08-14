import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput
} from 'react-native';
import {Card, CardSection } from '../common';

class Interest extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const buyItems = {
      buyItems: this.props.user.buy
    }
    this.props.fetchInterests(buyItems);
  }




  renderItems(){
    if (this.props.user.buy.length > 0 ) {
        const {interests} = this.props;
        interests.map(interest => (
           <TouchableOpacity>
            <Card>
              <CardSection>
                {interest.title}
                {interest.price}
              </CardSection>
            </Card>
          </TouchableOpacity>
        )
      )
    } else {
      return (
        <View>
          <Text>
            empty
          </Text>
        </View>
      )
    }
  }

  render(){
    console.log(this.props);
    return (
      <View>
        <ScrollView 
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {/* {this.renderItems()} */}
        </ScrollView>
      </View>
    )
  }
}


export default Interest;

// var TodoList = React.createClass({
//   getInitialState() {
//     return { newTodoText: undefined };
//   },
//   addNewTodo() {
//     var { newTodoText } = this.state;
//     if (newTodoText && newTodoText !== "") { }
//   },
//   onBack() {
//     this.props.navigator.pop();
//   },
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={this.onBack}>
//             <Icon name='chevron-left' size={20} color='white' />
//           </TouchableOpacity>
//           <Text style={styles.title}>
//             New Todo
//           </Text>
//           <TouchableOpacity onPress={this.addNewTodo}>
//             <Icon name='check' size={20} color='white' />
//           </TouchableOpacity>
//         </View>
//         <ScrollView automaticallyAdjustContentInsets={false} contentContainerStyle={styles.scrollViewContainer}>
//           <View style={styles.inputContainer}>
//             <TextInput onChangeText={(newTodoText) => {
//               this.setState({ newTodoText });
//             }} placeholder="New To-Do Text" style={styles.input} />
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// });

const styles = StyleSheet.create({

});
