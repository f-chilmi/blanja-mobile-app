import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Card, CardItem, Body, Button, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

import cartAction from '../redux/actions/cart';

// const API_URL = 'http://127.0.0.1:8080';
import {API_URL} from '@env';

class MyBag extends Component {
  state = {
    data: [],
    totalPrice: '',
    modalDelete: false,
    id: '',
    successDelete: false,
    refreshing: false,
  };
  componentDidMount() {
    this.props.getCart(this.props.auth.token);
  }

  componentDidUpdate() {
    const {data} = this.props.cart;
    if (this.props.cart.data !== undefined) {
      if (!this.state.data.length) {
        if (Object.keys(data).length > 0) {
          console.log(data.result);
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            data: data.result,
            totalPrice: data['total price'],
          });
        } else {
          console.log('menunggu data dari cart');
        }
      } else if (data.result === this.state.data) {
        console.log('data length sama');
      }
    } else {
      console.log('belum siap');
    }
  }

  DecreaseItem = (i) => {
    const {data} = this.state;
    let {totalPrice} = this.state;
    data[i] = {
      ...this.state.data[i],
      quantity: this.state.data[i].quantity - 1,
      total:
        this.state.data[i].Product.price * (this.state.data[i].quantity - 1),
    };
    totalPrice = totalPrice - this.state.data[i].Product.price;
    const id_product = data[i].id_product;
    const quantity = data[i].quantity;
    const updateQty = {
      id_product,
      quantity,
    };
    console.log(updateQty);
    this.setState({data, totalPrice});
    this.props.updateCart(this.props.auth.token, updateQty);
  };

  IncreaseItem = (i) => {
    const {data} = this.state;
    let {totalPrice} = this.state;
    data[i] = {
      ...this.state.data[i],
      quantity: this.state.data[i].quantity + 1,
      total:
        this.state.data[i].Product.price * (this.state.data[i].quantity + 1),
    };
    totalPrice = totalPrice + this.state.data[i].Product.price;
    const id_product = data[i].id_product;
    const quantity = data[i].quantity;
    const updateQty = {
      id_product,
      quantity,
    };
    console.log(updateQty);
    this.setState({data, totalPrice});
    this.props.updateCart(this.props.auth.token, updateQty);
  };

  idModal = (id) => {
    // console.log(id)
    this.setState({modalDelete: !this.state.modalDelete, id: id});
  };

  deleteCart = () => {
    console.log(this.state.id);
    this.props.deleteCart(this.props.auth.token, this.state.id);
    this.setState({modalDelete: false, successDelete: true}, () => {
      this.props.getCart(this.props.auth.token);
    });
  };

  checkout = () => {
    this.props.navigation.navigate('Checkout');
  };

  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getCart(this.props.auth.token);
    this.wait(500).then(() => this.setState({refreshing: false}));
    this.wait(100).then(() =>
      this.setState({
        data: this.props.cart.data.result,
        totalPrice: this.props.cart.data['total price'],
      }),
    );
  };

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={style.parent}>
        {data == undefined && <Spinner />}
        {!(data == undefined) && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }>
            <Text style={style.title}>My Bag</Text>
            {this.props.cart.data == undefined && (
              <Text>Your bag is empty</Text>
            )}
            {!(this.props.cart.data == undefined) &&
              data.length > 0 &&
              data.map((item, index) => (
                <Card
                  style={style.card}
                  key={item.id.toString().concat(item.category)}>
                  <CardItem cardBody>
                    <Body style={style.body}>
                      <View style={style.imageWrap}>
                        <Image
                          source={{uri: `${API_URL}${item.picture}`}}
                          style={style.image}
                        />
                      </View>
                      <View style={style.textRight}>
                        <View style={style.nameWrap}>
                          <View style={{width: '90%'}}>
                            <View style={{height: 48}}>
                              <Text style={style.nameProduct}>
                                {item.Product.name.length > 50
                                  ? item.Product.name.slice(0, 51).concat('...')
                                  : item.Product.name}
                              </Text>
                            </View>
                            <Text style={style.shop}>Zalora Cloth</Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => this.idModal(item.id)}
                            style={style.iconWrap}>
                            <View style={style.qty2}>
                              <Icon name="ellipsis-v" size={15} />
                            </View>
                            <Modal
                              transparent
                              visible={this.state.modalDelete}
                              style={{position: 'absolute'}}>
                              <View style={style.modalWrap}>
                                <TouchableOpacity
                                  style={style.insideModal}
                                  onPress={() => this.deleteCart()}>
                                  <Text style={{fontSize: 10}}>
                                    Delete from the list
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </Modal>
                          </TouchableOpacity>
                        </View>
                        <View style={style.qtyNPrice}>
                          <View style={style.qty}>
                            <TouchableOpacity
                              onPress={() => this.DecreaseItem(index)}>
                              <View style={style.button1}>
                                <Icon name="minus" size={20} />
                              </View>
                            </TouchableOpacity>
                            <Text style={style.qtyText}>{item.quantity}</Text>
                            <TouchableOpacity
                              onPress={() => this.IncreaseItem(index)}>
                              <View style={style.button2}>
                                <Icon name="plus" size={20} />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={style.priceWrapper}>
                            <Text style={style.price}>Rp{item.total}</Text>
                          </View>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              ))}
          </ScrollView>
        )}
        {this.props.cart.isLoading && (
          <Modal transparent visible>
            <View style={style.modalView}>
              <View style={style.alertBox}>
                <ActivityIndicator size="large" color="#DB3022" />
                <Text style={style.textAlert}>Loading . . .</Text>
              </View>
            </View>
          </Modal>
        )}
        <View>
          <CardItem style={{flexDirection: 'column'}}>
            <View style={style.wrapper}>
              <Text style={style.textGrey}>Total amount:</Text>
              <Text style={style.textPrice}>
                Rp
                {this.props.cart.data == undefined
                  ? null
                  : this.state.totalPrice}
              </Text>
            </View>
            <View style={style.buttonBlock}>
              <Button
                block
                style={style.buttonCheckOut}
                disabled={this.props.cart.data == undefined ? true : false}
                onPress={this.checkout}>
                <Text style={style.textCheckOut}>CHECK OUT</Text>
              </Button>
            </View>
          </CardItem>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth,
});
const mapDispatchToProps = {
  getCart: cartAction.getCart,
  updateCart: cartAction.updateCart,
  deleteCart: cartAction.deleteCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBag);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    padding: '3%',
    flex: 1,
  },
  title: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    height: 100,
  },
  imageWrap: {
    width: '30%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  body: {
    flexDirection: 'row',
  },
  nameWrap: {
    height: 50,
    flexDirection: 'row',
  },
  textRight: {
    marginLeft: 15,
    width: '60%',
  },
  nameProduct: {
    fontSize: 10,
  },
  shop: {
    fontSize: 7,
    color: 'grey',
  },
  button1: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 7,
    paddingTop: 5,
  },
  qtyText: {
    marginHorizontal: 15,
  },
  button2: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 7,
    paddingTop: 5,
  },
  qty: {
    flexDirection: 'row',
    marginRight: 20,
    width: '60%',
  },
  qty2: {
    flexDirection: 'row',
    // marginRight: 20,
    width: '60%',
  },
  qtyNPrice: {
    marginTop: 15,
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  priceWrapper: {
    // marginLeft: 'auto'
  },
  price: {
    fontSize: 11,
  },
  textGrey: {
    fontSize: 13,
    color: 'grey',
  },
  textPrice: {
    marginLeft: 'auto',
    fontSize: 12,
  },
  buttonBlock: {
    width: '100%',
    marginTop: 20,
  },
  buttonCheckOut: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
  },
  textCheckOut: {
    color: 'white',
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'space-between',
    width: '100%',
  },
  iconWrap: {
    marginLeft: 'auto',
    marginTop: 10,
    position: 'relative',
  },
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideModal: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
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
