import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


import Swiper from 'react-native-swiper';
import Greeting from './Greeting';
import Greeting2 from './Greeting2';
import Greeting3 from './Greeting3';

class Login extends Component{
  constructor(props) {
    super(props);
    console.log('props',this.props);

    this.state = {
      loading: false,
      email: "",
      password: ""
    };
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  componentWillMount() {
    console.log('mount');
    this.props.clearErrors();
  }

  onSignIn() {
    // let {dispatch, fields: {email, password}} = this.props;
    let email = this.state.email;
    let password = this.state.password;
    this.setState({
      loading: true
    });
    this.props.loginUser(email, password).then(()=>{
      this.setState({
        loading: false
      });
    });
  }

  onSignUp() {
    // let {dispatch, fields: {email, password}} = this.props;
    let email = this.state.email;
    let password = this.state.password;
    this.setState({
      loading: true
    });
    this.props.signupUser(email, password).then(()=>{
      this.setState({
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
          Loading...
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Ka-Ching!
          </Text>
        </View>

        <View style={styles.swiped}>
          <Swiper style={styles.wrapper} index={0} loop={false} activeDotColor={'white'} showsButtons={false}>
            <View style={styles.slide1}>
              <Greeting/>
            </View>
            <View style={styles.slide2}>
              <Greeting2/>
            </View>
            <View style={styles.slide3}>
              <Greeting3/>
            </View>
          </Swiper>
        </View>

        <View style={styles.field}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            placeholder="Email"
            style={styles.textInput}/>
          <View>
          </View>
        </View>
        <View style={styles.field}>
          <TextInput
            secureTextEntry
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            placeholder="Password"
            style={styles.textInput}/>
            <View>
            </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  onPress={this.onSignIn}>
            <Text style={styles.button}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSignUp}>
            <Text style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 15,
    backgroundColor: '#2ecc71',
    flexDirection: 'column'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center'
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
  },
  formError: {
    color: 'red'
  },
  swiped: {
    flex: 4
  }
};

export default Login;
