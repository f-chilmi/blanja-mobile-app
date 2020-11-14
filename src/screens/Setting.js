import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import profileAction from '../redux/actions/profile';
import store from '../redux/store';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: '',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      modalPersonal: '',
      modalPassword: false,
    };
  }
  componentDidMount() {
    this.props.getProfile(this.props.auth.token);
  }
  componentDidUpdate() {
    if (this.props.profile.data !== undefined) {
      const {data} = this.props.profile;
      const date = data.birth;
      // let dateNew = moment(date).format('YYYY-MM-DD');
      // var dateNew = date.toLocaleDateString('en-CA');
      if (this.state.name == '' && this.state.birth == '') {
        this.setState({
          name: data.name,
          birth: data.birth,
        });
        console.log('updating state');
      }
    }
  }
  editPersonal = () => {
    const {name, birth} = this.state;
    const data = {name, birth};
    console.log(data);
    store.dispatch(profileAction.updateProfile(this.props.auth.token, data));
    this.setState({modalPersonal: false});
  };
  changePassword = () => {
    const { oldPassword, newPassword, confirmNewPassword } = this.state
    const data = { oldPassword, newPassword, confirmNewPassword }
    store.dispatch(profileAction.changePassword(this.props.auth.token, data));
  };
  render() {
    const {data} = this.props.profile;
    const {name, birth, modalPassword, modalPersonal} = this.state;
    return (
      <View style={style.parent}>
        <Text style={style.settingText}>Settings</Text>
        <View style={style.wrapper}>
          <View style={style.leftText}>
            <Text style={style.passwordText}>Personal information</Text>
          </View>
          <TouchableOpacity
            style={style.changePsw}
            onPress={() => this.setState({modalPersonal: true})}>
            <Text style={style.rightText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={style.inputWrapper}>
          <Text style={style.labelText}>Full name</Text>
          <TextInput name="name" value={name} />
        </View>
        <View style={style.inputWrapper}>
          <Text style={style.labelText}>Date of birth</Text>
          <TextInput name="birth" value={birth} />
        </View>

        <View style={style.wrapper}>
          <View style={style.leftText}>
            <Text style={style.passwordText}>Password</Text>
          </View>
          <TouchableOpacity
            style={style.changePsw}
            onPress={() => this.setState({modalPassword: true})}>
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

        <Modal visible={modalPersonal}>
          <View style={style.modal}>
            <View style={style.modalChild}>
              <View style={style.inputWrapper}>
                <TextInput
                  style={style.textInput}
                  name="name"
                  value={name}
                  onChangeText={(text) => this.setState({name: text})}
                />
                <TextInput
                  name="birth"
                  style={style.textInput}
                  value={birth}
                  onChangeText={(text) => this.setState({birth: text})}
                />
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity
                    block
                    activeOpacity={0.7}
                    style={style.buttonBlock}
                    onPress={()=>this.setState({modalPersonal: false})}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    block
                    activeOpacity={0.7}
                    style={style.buttonBlock}
                    onPress={this.editPersonal}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>SAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={modalPassword}>
          <View style={style.modal}>
            <View style={style.modalChild}>
              <View style={style.inputWrapper}>
                <TextInput
                  style={style.textInput}
                  name="oldPassword"
                  placeholder="Old password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({oldPassword: text})}
                />
                <TextInput
                  style={style.textInput}
                  name="newPassword"
                  placeholder="New password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({newPassword: text})}
                />
                <TextInput
                  style={style.textInput}
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    this.setState({confirmNewPassword: text})
                  }
                />
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={style.buttonBlock}
                    onPress={() => {
                      this.setState({modalPassword: false});
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      CANCEL
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={style.buttonBlock}
                    onPress={this.changePassword}
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      SAVE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
  changePassword: profileAction.changePassword,
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
    marginTop: 15,
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
    marginBottom: 10,
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
  modal: {
    backgroundColor: 'transparent',
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalChild: {
    backgroundColor: 'white',
  },
  buttonBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#DB3022',
    borderRadius: 30,
    width: '40%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 20,
    marginBottom: 5,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
