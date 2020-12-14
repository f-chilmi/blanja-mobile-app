import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import moment from 'moment';

import checkoutAction from '../redux/actions/checkout';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.getCheckout(this.props.auth.token);
    this.props.showOrder(this.props.auth.token);
  }

  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };

  goToOrder = () => {
    this.props.navigation.navigate('Order');
  };
  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.showOrder(this.props.auth.token);
    this.wait(500).then(() => this.setState({refreshing: false}));
  };

  render() {
    console.log(this.props);
    return (
      <View style={style.parent}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <Text style={style.myProfile}>My orders</Text>
          {this.props.checkout.history == undefined && (
            <Text>No history transaction</Text>
          )}
          {this.props.checkout.isLoading && (
            <Modal transparent visible>
              <View style={style.modalView}>
                <View style={style.alertBox}>
                  <ActivityIndicator size="large" color="#DB3022" />
                  <Text style={style.textAlert}>Loading . . .</Text>
                </View>
              </View>
            </Modal>
          )}
          {this.props.checkout.history &&
            this.props.checkout.history.length > 0 &&
            this.props.checkout.history.map((item) => (
              <Card style={style.card}>
                <CardItem style={style.cardItem}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={style.flexDir}>
                      <Text style={style.line1}>Order No194703{item.id}</Text>
                      <Text style={style.line1Right}>
                        {moment(item.createdAt).format('DD-MM-YYYY')}
                      </Text>
                    </View>
                    <View style={style.flexDir}>
                      <Text style={style.line2}>Tracking number: </Text>
                      <Text style={style.line2Right}>
                        {' '}
                        IW347545345{item.id}
                      </Text>
                    </View>
                    <View style={style.flexDir}>
                      <Text style={style.line2}>Quantity: </Text>
                      <Text style={style.line2Right}> {item.quantity}</Text>
                    </View>
                    <View style={style.flexDir}>
                      <Text style={style.line2}>Total amount: </Text>
                      <Text style={style.line2Right}> Rp {item.total}</Text>
                    </View>
                    <View style={style.line4}>
                      <Text style={style.line4Text}>{item.status}</Text>
                    </View>
                  </TouchableOpacity>
                </CardItem>
              </Card>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  checkout: state.checkout,
});
const mapDispatchToProps = {
  getCheckout: checkoutAction.getCheckout,
  showOrder: checkoutAction.showOrder,
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
  modalView: {
    backgroundColor: 'grey',
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});
