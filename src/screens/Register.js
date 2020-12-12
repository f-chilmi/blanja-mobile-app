import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import store from '../redux/store';
import auth from '../redux/actions/auth';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  goToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  signup = () => {
    // this.props.navigation.navigate('Home');
    const {name, email, password} = this.state;
    if (name && email && password) {
      const data = {name, email, password};
      console.log(data);
      this.props.signup(data);
    } else {
      console.log('all field must be filled');
    }
  };

  render() {
    console.log(this.state);
    return (
      <View style={style.parent}>
        <View style={style.signupWrapper}>
          <Text style={style.signupText}>Sign up</Text>
        </View>
        <View style={style.parentContent}>
          <View style={style.inputWrapper}>
            <Text style={style.labelText}>Username</Text>
            <TextInput onChangeText={(text) => this.setState({name: text})} />
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.labelText}>Email</Text>
            <TextInput onChangeText={(text) => this.setState({email: text})} />
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.labelText}>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
        </View>
        <View style={style.textAlready}>
          <Text style={style.textAlready1}>Already have an account? </Text>
          <TouchableOpacity onPress={this.goToLogin}>
            <Text style={style.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnWrapper}>
          <TouchableOpacity style={style.btn} onPress={this.signup}>
            <Text style={style.textButton}>SIGN UP</Text>
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
    color: 'grey',
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
    justifyContent: 'flex-end',
  },
  textAlready1: {
    fontSize: 12,
  },
  textLogin: {
    fontSize: 12,
    color: '#DB3022',
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
  },
});

// export default Register
const mapStateToProps = (state) => ({auth: state.auth});

const mapDispatchToProps = {
  signup: auth.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
