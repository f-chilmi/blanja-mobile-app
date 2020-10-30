import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';

import store from '../redux/store';
import auth from '../redux/actions/auth';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  doLogin = () => {
    const {email, password} = this.state
    // if(email&&password){
    //   const data = {email, password}
    //   console.log(data)
    //   store.dispatch(auth.login(data))
    //   Alert.alert('login success')
    // }
    this.props.navigation.navigate('Home')
  }

  render() {
    console.log(this.props)
    return (
      <View style={style.parent}>
        <View style={style.signupWrapper}>
          <Text style={style.signupText}>Login</Text>
        </View>
        <View style={style.parentContent}>
          <View style={style.inputWrapper}>
            <Text style={style.labelText}>Email</Text>
            <TextInput name='email' onChangeText={(text) => this.setState({email: text})}></TextInput>
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.labelText}>Password</Text>
            <TextInput name='password' onChangeText={(text) => this.setState({password: text})} secureTextEntry={true}></TextInput>
          </View>
        </View>
        <View style={style.textAlready}>
          <Text style={style.textAlready1}>Forgot password? </Text>
        </View>
        <View style={style.btnWrapper}>
          <TouchableOpacity style={style.btn} onPress={this.doLogin}>
            <Text style={style.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    );
  }
}
const style = StyleSheet.create({
  parent: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  signupWrapper: {
    marginLeft: '5%',
    marginVertical: 30,
  },
  parentContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  labelText: {
    fontSize: 12,
    color: 'grey'
  },  
  signupText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textAlready: {
    marginLeft: '5%',
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textAlready1: {
    fontSize: 12,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#DB3022',
    borderRadius: 30,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',

  }
});

const mapStateToProps = state => ({auth: state.auth})

const mapDispatchToProps = {
  login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;