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

class Checkout extends Component {
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

  render() {
    console.log(this.props);
    console.log(this.props.checkout.data.data == undefined);
    // const dataAddress = this.props.checkout.data.data.address[0];
    return (
      <View>
        {this.props.checkout.data.data == undefined && <Spinner />}
        {!(this.props.checkout.data.data == undefined) && (
          <View style={style.parent}>
            <Text style={style.shipping}>Shipping address</Text>
            <Card>
              <CardItem style={{flexDirection: 'column'}}>
                <View style={style.textUp}>
                  <View style={style.name}>
                    <Text>
                      {this.props.checkout.data.data.address[0].recipientsName}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={this.goToshipping}>
                    <Text style={style.change}>Change</Text>
                  </TouchableOpacity>
                </View>
                <View style={style.address}>
                  <Text>
                    {this.props.checkout.data.data.address[0].address}
                    {', '}
                    {this.props.checkout.data.data.address[0].city}{' '}
                    {this.props.checkout.data.data.address[0].postalCode}
                  </Text>
                  <Text style={style.phone}>
                    +62{' '}
                    {this.props.checkout.data.data.address[0].recipientsPhone}
                  </Text>
                </View>
              </CardItem>
            </Card>

            <View style={style.payment}>
              <Text style={style.payText}>Payment</Text>
              <View style={style.blanjaWrap}>
                <Text style={style.blanjaPay}>BlanjaPay</Text>
                <CheckBox
                  value={this.state.isSelected}
                  onValueChange={() =>
                    this.setState({isSelected: !this.state.isSelected})
                  }
                  style={style.checkbox}
                />
              </View>
            </View>

            <Card transparent style={{alignSelf: 'flex-end'}}>
              <CardItem
                style={{
                  flexDirection: 'column',
                  backgroundColor: 'transparent',
                }}>
                <View style={style.textWrap}>
                  <Text style={style.leftSide}>Order:</Text>
                  <Text style={style.rightSide}>
                    Rp{this.props.checkout.data['total price']}
                  </Text>
                </View>
                <View style={style.textWrap}>
                  <Text style={style.leftSide}>Delivery:</Text>
                  <Text style={style.rightSide}>
                    Rp{this.props.checkout.data['shipping cost']}
                  </Text>
                </View>
                <View style={style.textWrap}>
                  <Text style={style.leftSide1}>Summary:</Text>
                  <Text style={style.rightSide1}>
                    Rp{this.props.checkout.data.total}
                  </Text>
                </View>
                <Button block style={style.buttonCheckOut}>
                  <Text style={style.textCheckOut}>SUBMIT ORDER</Text>
                </Button>
              </CardItem>
            </Card>
          </View>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const style = StyleSheet.create({
  parent: {
    padding: '2%',
  },
  // shipping: {
  //   fontWeight: 'bold',
  //   marginVertical: 10,
  // },
  textUp: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  name: {
    width: '80%',
  },
  change: {
    color: '#DB3022',
  },
  address: {
    width: '100%',
  },
  payment: {
    marginTop: 30,
  },
  phone: {
    fontSize: 12,
    marginTop: 5,
  },
  payText: {
    fontSize: 24,
    marginBottom: 15,
  },
  blanjaWrap: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  blanjaPay: {
    fontSize: 18,
    width: '89%',
  },
  checkbox: {
    marginTop: 5,
  },
  textWrap: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  leftSide: {
    width: '70%',
    fontSize: 11,
    color: 'grey',
  },
  rightSide: {
    fontSize: 11,
    marginLeft: 'auto',
  },
  leftSide1: {
    width: '70%',
    fontSize: 13,
    color: 'grey',
  },
  rightSide1: {
    fontSize: 13,
    marginLeft: 'auto',
  },
  buttonBlock: {
    width: '100%',
    marginTop: 20,
  },
  buttonCheckOut: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  textCheckOut: {
    color: 'white',
    fontSize: 14,
  },
});
