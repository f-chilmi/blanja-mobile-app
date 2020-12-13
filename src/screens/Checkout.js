import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {Button, CheckBox, Card, CardItem, Spinner} from 'native-base';

import checkoutAction from '../redux/actions/checkout';
import addressAction from '../redux/actions/address';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
      refreshing: false,
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
    const qty = this.props.cart.data.result.map((item) => item.quantity);
    const add = (accumulator, currentValue) => accumulator + currentValue;
    const quantity = qty.reduce(add);
    let status;
    if (
      this.props.checkout.dataPayment.totalAll >=
      this.props.checkout.dataPayment.balance
    ) {
      status = 'Waiting for payment';
    } else {
      status = 'Paid';
    }
    const data = {
      id_seller: 1,
      quantity: quantity,
      total: this.props.checkout.dataPayment.totalAll,
      status: status,
    };
    this.props.addOrder(this.props.auth.token, data);
    this.props.navigation.navigate('Order');
  };

  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getCheckout(this.props.auth.token);
    this.props.getAddress(this.props.auth.token);
    this.props.payment(this.props.auth.token);
    this.wait(500).then(() => this.setState({refreshing: false}));
  };

  render() {
    return (
      <View>
        {this.props.checkout.data.data == undefined && <Spinner />}
        {this.props.checkout.isLoading && <Spinner />}
        {!(this.props.checkout.data == undefined) && (
          <ScrollView
            style={style.parent}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }>
            <Text style={style.shipping}>Shipping address</Text>
            {this.props.checkout.data.data.PrimaryAddress.length < 1 && (
              <Card>
                <CardItem style={{flexDirection: 'column'}}>
                  <View style={style.textUp}>
                    <View style={style.name}>
                      <Text>No primary address found. add primary address</Text>
                    </View>
                    <TouchableOpacity onPress={this.goToshipping}>
                      <Text style={style.change}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </CardItem>
              </Card>
            )}
            {this.props.checkout.data.data.PrimaryAddress.length > 0 && (
              <Card>
                <CardItem style={{flexDirection: 'column'}}>
                  <View style={style.textUp}>
                    <View style={style.name}>
                      <Text>
                        {
                          this.props.checkout.data.data.PrimaryAddress[0]
                            .recipientsName
                        }
                      </Text>
                    </View>
                    <TouchableOpacity onPress={this.goToshipping}>
                      <Text style={style.change}>Change</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.address}>
                    <Text>
                      {this.props.checkout.data.data.PrimaryAddress[0].address}
                      {', '}
                      {
                        this.props.checkout.data.data.PrimaryAddress[0].city
                      }{' '}
                      {
                        this.props.checkout.data.data.PrimaryAddress[0]
                          .postalCode
                      }
                    </Text>
                    <Text style={style.phone}>
                      +62{' '}
                      {
                        this.props.checkout.data.data.PrimaryAddress[0]
                          .recipientsPhone
                      }
                    </Text>
                  </View>
                </CardItem>
              </Card>
            )}

            <View style={style.payment}>
              <Text style={style.payText}>Payment</Text>
              <View style={style.blanjaWrap}>
                <Text style={style.blanjaPay}>
                  BlanjaPay
                  <Text style={style.balanceText}>
                    {' '}
                    (Balance: Rp{this.props.checkout.dataPayment.balance})
                  </Text>
                </Text>
              </View>
            </View>

            <Card transparent style={{alignSelf: 'flex-end'}}>
              <CardItem style={style.cardItem}>
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
                <Button
                  block
                  style={style.buttonCheckOut}
                  onPress={this.goToOrder}>
                  <Text style={style.textCheckOut}>SUBMIT ORDER</Text>
                </Button>
              </CardItem>
            </Card>
          </ScrollView>
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
  cart: state.cart,
});
const mapDispatchToProps = {
  getCheckout: checkoutAction.getCheckout,
  payment: checkoutAction.payment,
  getAddress: addressAction.getAddress,
  addOrder: checkoutAction.addOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const style = StyleSheet.create({
  parent: {
    padding: '2%',
  },
  balanceText: {
    color: 'grey',
    fontSize: 9,
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
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
