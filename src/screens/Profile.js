import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
// import {API_URL} from '@env';

import store from '../redux/store';
import profileAction from '../redux/actions/profile';
import addressAction from '../redux/actions/address';
import authAction from '../redux/actions/auth';
import cartAction from '../redux/actions/cart';
import checkoutAction from '../redux/actions/checkout';

const API_URL = 'http://127.0.0.1:8080';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      modalOpen: false,
    };
  }
  componentDidMount() {
    this.props.getProfile(this.props.auth.token);
  }

  goToOrder = () => {
    this.props.navigation.navigate('Order');
  };

  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };
  goToSetting = () => {
    this.props.navigation.navigate('Setting');
  };
  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  logout = () => {
    this.props.logoutProfile();
    this.props.logoutAddress();
    this.props.logoutCart();
    this.props.logoutCheckout();
    this.wait(500).then(() => this.props.logout());
  };
  handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        this.setState({image: response});
        const form = new FormData();
        form.append('picture', {
          uri: String('file://'.concat(response.path)),
          type: response.type,
          name: response.fileName,
        });
        this.props.updateImage(this.props.auth.token, form);
        this.props.getProfile(this.props.auth.token);
      }
    });
  };
  render() {
    const {data} = this.props.profile;
    const {image, modalOpen} = this.state;
    return (
      <View style={style.parent}>
        <Text style={style.myProfile}>My profile</Text>
        <View style={style.top}>
          <TouchableOpacity
            onPress={() => {
              this.setState({modalOpen: true});
            }}>
            <View style={style.avaWrapper}>
              {image == '' ? (
                data.picture == undefined ? (
                  <Icon size={80} name="user" />
                ) : (
                  <Image
                    style={style.img}
                    source={{uri: `${API_URL}/${data.picture}`}}
                  />
                )
              ) : (
                <Image style={style.img} source={image} />
              )}
            </View>
          </TouchableOpacity>
          <View style={style.nameWrap}>
            <Text style={style.name}>{data.name}</Text>
            <Text style={style.email}>{data.email}</Text>
          </View>
        </View>

        <View style={style.bottom}>
          <TouchableOpacity onPress={this.goToOrder}>
            <View style={style.textLeft}>
              <View style={style.textLeft1}>
                <Text style={style.textOrder}>My orders</Text>
              </View>
              <Icon style={style.icon} name="angle-right" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToshipping}>
            <View style={style.textLeft}>
              <View style={style.textLeft1}>
                <Text style={style.textOrder}>Shipping address</Text>
              </View>
              <Icon style={style.icon} name="angle-right" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSetting}>
            <View style={style.textLeft}>
              <View style={style.textLeft1}>
                <Text style={style.textOrder}>Settings</Text>
              </View>
              <Icon style={style.icon} name="angle-right" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logout}>
            <View style={style.textLeft}>
              <View style={style.textLeft1}>
                <Text style={style.textOrder}>Logout</Text>
              </View>
              <Icon style={style.icon} name="angle-right" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <Modal transparent visible={modalOpen}>
          <View style={style.modalView1}>
            <View style={style.avaWrapper1}>
              {!(data.picture == undefined) && (
                <Image
                  style={style.ava}
                  source={{uri: `${API_URL}/${data.picture}`}}
                />
              )}
            </View>
            <View style={style.buttonWrapper2}>
              <TouchableOpacity
                style={style.choosePhoto}
                onPress={this.handleChoosePhoto}>
                <Text>Choose</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.choosePhoto}
                onPress={() => this.setState({modalOpen: false})}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({modalOpen: false})}
              style={style.choosePhoto1}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  checkout: state.checkout,
  cart: state.cart,
  address: state.address,
});

const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
  updateProfile: profileAction.updateProfile,
  updateImage: profileAction.updateImage,
  logout: authAction.logout,
  logoutProfile: profileAction.logout,
  logoutAddress: addressAction.logout,
  logoutCart: cartAction.logout,
  logoutCheckout: checkoutAction.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const style = StyleSheet.create({
  parent: {
    padding: '3%',
  },
  myProfile: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  top: {
    flexDirection: 'row',
  },
  avaWrapper: {
    width: 80,
    height: 80,
  },
  avaWrapper1: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  ava: {
    height: '100%',
    width: '100%',
    borderRadius: 200,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  nameWrap: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    color: 'grey',
  },
  bottom: {
    marginTop: 30,
  },
  textLeft: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  textLeft1: {
    width: '90%',
  },
  icon: {
    marginLeft: 'auto',
  },
  textOrder: {
    fontWeight: 'bold',
  },
  modalView1: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor: 'white',
  },
  form: {
    marginLeft: 0,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 12,
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    color: 'grey',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonWrapper2: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  choosePhoto: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
    width: '45%',
    marginVertical: 10,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  choosePhoto1: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
    width: '90%',
    marginVertical: 10,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    width: 90,
    height: 40,
    borderColor: 'black',
  },
  buttonTittle: {
    fontSize: 14,
    color: 'black',
  },
});
