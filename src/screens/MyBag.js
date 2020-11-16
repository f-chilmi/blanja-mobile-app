import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem, Body, Button, Spinner, Fab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

import cartAction from '../redux/actions/cart';

const API_URL = 'http://127.0.0.1:8080';

class MyBag extends Component {
  state = {
    data: [],
    totalPrice: '',
    fab: false,
  };
  componentDidMount() {
    this.props.getCart(this.props.auth.token);
  }

  componentDidUpdate() {
    if (this.props.cart.data !== undefined) {
      const {data} = this.props.cart;
      if (!this.state.data.length) {
        if (Object.keys(this.props.cart.data).length > 0) {
          // console.log(data);
          this.setState({
            data: data.data,
            totalPrice: data['total price'],
          });
        } else {
          console.log('menunggu data dari cart');
        }
      } else {
        console.log('updated');
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
      total: this.state.data[i].price * (this.state.data[i].quantity - 1),
    };
    totalPrice = totalPrice - this.state.data[i].price;
    const itemsId = data[i].items_id;
    const quantity = data[i].quantity;
    const updateQty = {
      itemsId,
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
      total: this.state.data[i].price * (this.state.data[i].quantity + 1),
    };
    totalPrice = totalPrice + this.state.data[i].price;
    const itemsId = data[i].items_id;
    const quantity = data[i].quantity;
    const updateQty = {
      itemsId,
      quantity,
    };
    console.log(updateQty);
    this.setState({data, totalPrice});
    this.props.updateCart(this.props.auth.token, updateQty);
  };

  checkout = () => {
    this.props.navigation.navigate('Checkout');
  };

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={style.parent}>
        {this.props.cart.data.data == undefined && <Spinner />}
        {!(data == undefined) && (
          <ScrollView>
            <Text style={style.title}>My Bag</Text>
            {data.length !== 0 &&
              data.map((item, index) => (
                <Card
                  style={style.card}
                  key={item.id.toString().concat(item.category)}>
                  <CardItem cardBody>
                    <Body style={style.body}>
                      <View style={style.imageWrap}>
                        <Image
                          source={{uri: `${API_URL}${item.picture1}`}}
                          style={style.image}
                        />
                      </View>
                      <View style={style.textRight}>
                        <View style={style.nameWrap}>
                          <View style={{width: '90%'}}>
                            <View style={{height: 48}}>
                              <Text style={style.nameProduct}>
                                {item.name.length > 50
                                  ? item.name.slice(0, 51).concat('...')
                                  : item.name}
                              </Text>
                            </View>
                            <Text style={style.shop}>Zalora Cloth</Text>
                          </View>
                          <TouchableOpacity
                            style={{marginLeft: 'auto', marginTop: 10}}>
                            <Icon name="ellipsis-v" size={15} />
                          </TouchableOpacity>
                          {/* <Fab
                            active={this.state.fab}
                            direction="left"
                            // containerStyle={{ }}
                            style={{marginTop: 10}}
                            position="topRight"
                            onPress={() => this.setState({ fab: !this.state.fab })}>
                            <Icon name="ellipsis-v" size={15} />
                            <Button>
                              <Icon name="share"/>
                            </Button>
                          </Fab> */}
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
        <View>
          <CardItem style={{flexDirection: 'column'}}>
            <View style={style.wrapper}>
              <Text style={style.textGrey}>Total amount:</Text>
              <Text style={style.textPrice}>Rp{this.state.totalPrice}</Text>
            </View>
            <View style={style.buttonBlock}>
              <Button
                block
                style={style.buttonCheckOut}
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
    fontSize: 12
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
});
