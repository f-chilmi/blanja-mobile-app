import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import Logo from '../assets/Vector.png';

export default class Landing extends Component {
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
});
