import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

import image from '../assets/Image.png';

import profileAction from '../redux/actions/profile';

const API_URL = 'http://127.0.0.1:8080';

class Profile extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.auth.token);
  }
  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };
  goToSetting = () => {
    this.props.navigation.navigate('Setting');
  };
  render() {
    const {data} = this.props.profile;
    // console.log(`${API_URL}${data.urlPicture}`);
    return (
      <View style={style.parent}>
        <Text style={style.myProfile}>My profile</Text>
        <View style={style.top}>
          <View style={style.avaWrapper}>
            {data.urlPicture !== undefined ? (
              <Image
                style={style.img}
                source={{uri: `${API_URL}${data.urlPicture}`}}
              />
            ) : (
              <Icon size={80} name="user" />
            )}
          </View>
          <View style={style.nameWrap}>
            <Text style={style.name}>{data.name}</Text>
            <Text style={style.email}>{data.email}</Text>
          </View>
        </View>

        <View style={style.bottom}>
          <TouchableOpacity>
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
});
