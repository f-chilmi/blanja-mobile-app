import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Logo from '../assets/Vector.png';

export default class Landing extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  goToSignup = () => {
    this.props.navigation.navigate('Register');
  };

  goToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    console.log(this.props)
    return (
      <View style={style.parent}>
        <View style={style.imagewrapper}>
          <Image source={Logo} style={{height: 100}} />
        </View>
        <View>
          <TouchableOpacity
            block
            style={style.signup}
            onPress={this.goToSignup}>
            <Text style={style.textButton1}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity block style={style.login} onPress={this.goToLogin}>
            <Text style={style.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#DB3022',
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
  },
  imagewrapper: {
    height: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 30,
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginVertical: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  textButton1: {
    color: 'white',
    fontWeight: 'bold',
  },
});
