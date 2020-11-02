import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import profileAction from '../redux/actions/profile';

class Setting extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.auth.token);
  }
  render() {
    console.log(this.props)
    const {data} = this.props.profile
    return (
      <View style={style.parent}>
        <Text style={style.settingText}>Settings</Text>
        <Text style={style.sub}>Personal information</Text>
        <View style={style.inputWrapper}>
          <Text style={style.labelText}>Full name</Text>
          <TextInput
            name="fullname"
            value={data.name}
            onChangeText={(text) => this.setState({fullname: text})}
          />
        </View>
        <View style={style.inputWrapper}>
          <Text style={style.labelText}>Date of birth</Text>
          <TextInput
            name="birth"
            value={data.birth}
            onChangeText={(text) => this.setState({birth: text})}
          />
        </View>

        <View style={style.wrapper}>
          <View style={style.leftText}>
            <Text style={style.passwordText}>Password</Text>
          </View>
          <TouchableOpacity style={style.changePsw}>
            <Text style={style.rightText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={style.inputWrapper}>
          <Text style={style.labelText}>Password</Text>
          <TextInput
            name="password"
            value="****"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

const style = StyleSheet.create({
  parent: {
    padding: '3%',
  },
  inputWrapper: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  labelText: {
    fontSize: 12,
    color: 'grey',
  },
  settingText: {
    fontSize: 26,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  sub: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leftText: {
    width: '70%',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10
  },
  rightText: {
    marginLeft: 'auto',
    color: 'grey',
  },
  passwordText: {
    fontWeight: 'bold',
  },
  changePsw: {
    marginLeft: 'auto',
  },
});
