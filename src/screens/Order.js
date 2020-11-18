import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Button,
  CheckBox,
  Card,
  CardItem,
  Spinner,
  Form,
  Item,
  Picker,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

import checkoutAction from '../redux/actions/checkout';
import addressAction from '../redux/actions/address';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };
  }

  componentDidMount() {
    this.props.getCheckout(this.props.auth.token);
    this.props.getAddress(this.props.auth.token);
    this.props.payment(this.props.auth.token);
  }

  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };

  goToOrder = () => {
    this.props.navigation.navigate('Order');
  };

  render() {
    console.log(this.props);
    console.log(this.props.checkout.data.data == undefined);
    // const dataAddress = this.props.checkout.data.data.address[0];
    return (
      <View style={style.parent}>
        <ScrollView>
          <Text style={style.myProfile}>My orders</Text>
          <Card style={style.card}>
            <CardItem style={style.cardItem}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
                <View style={style.flexDir}>
                  <Text style={style.line1}>Order No1947034</Text>
                  <Text style={style.line1Right}>05-12-2019</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Tracking number: </Text>
                  <Text style={style.line2Right}> IW3475453455</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Quantity: </Text>
                  <Text style={style.line2Right}> 3</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Total amount: </Text>
                  <Text style={style.line2Right}> Rp 450000</Text>
                </View>
                <View style={style.line4}>
                  <Text style={style.line4Text}>Delivered</Text>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card style={style.card}>
            <CardItem style={style.cardItem}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
                <View style={style.flexDir}>
                  <Text style={style.line1}>Order No1947034</Text>
                  <Text style={style.line1Right}>05-12-2019</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Tracking number: </Text>
                  <Text style={style.line2Right}> IW3475453455</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Quantity: </Text>
                  <Text style={style.line2Right}> 3</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Total amount: </Text>
                  <Text style={style.line2Right}> Rp 450000</Text>
                </View>
                <View style={style.line4}>
                  <Text style={style.line4Text}>Delivered</Text>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card style={style.card}>
            <CardItem style={style.cardItem}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
                <View style={style.flexDir}>
                  <Text style={style.line1}>Order No1947034</Text>
                  <Text style={style.line1Right}>05-12-2019</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Tracking number: </Text>
                  <Text style={style.line2Right}> IW3475453455</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Quantity: </Text>
                  <Text style={style.line2Right}> 3</Text>
                </View>
                <View style={style.flexDir}>
                  <Text style={style.line2}>Total amount: </Text>
                  <Text style={style.line2Right}> Rp 450000</Text>
                </View>
                <View style={style.line4}>
                  <Text style={style.line4Text}>Delivered</Text>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  checkout: state.checkout,
  address: state.address,
  payment: state.checkout,
});
const mapDispatchToProps = {
  getCheckout: checkoutAction.getCheckout,
  payment: checkoutAction.payment,
  getAddress: addressAction.getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

const style = StyleSheet.create({
  parent: {
    padding: '3%',
    flex: 1,
  },
  myProfile: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    // borderWidth: 1,
    // borderRadius: 50,
    // borderColor: 'black',
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  flexDir: {
    flexDirection: 'row',
    width: '100%',
  },
  line1: {
    fontWeight: 'bold',
    fontSize: 13,
    width: '50%',
    marginBottom: 3,
  },
  line1Right: {
    marginLeft: 'auto',
    fontSize: 13,
    color: 'grey',
  },
  line2: {
    fontSize: 12,
    color: 'grey',
    marginVertical: 3,
  },
  line2Right: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  line4: {
    width: '100%',
    marginLeft: 'auto',
  },
  line4Text: {
    fontSize: 12,
    color: 'green',
    marginLeft: 'auto',
    marginBottom: 3,
  },
});
