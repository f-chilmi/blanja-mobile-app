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
import {Spinner} from 'native-base';

import Star from '../assets/Star.png';
import Activated from '../assets/activated.png';

import productAction from '../redux/actions/product';
import cartAction from '../redux/actions/cart';

const API_URL = 'http://127.0.0.1:8080';
// import {API_URL} from '@env';

class PageProduct extends Component {
  state = {
    id_product: this.props.product.data[0].id,
    quantity: 1,
    successAdd: false,
  };
  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.getProduct(id);
  }

  myBag = () => {
    this.props.navigation.navigate('MyBag');
  };

  addToCart = () => {
    console.log('ok');
    const data = {
      id_product: this.props.product.data[0].id,
      quantity: 1,
    };
    this.props.postCart(this.props.auth.token, data);
    this.wait(1000).then(() => {
      this.props.getCart(this.props.auth.token);
      this.props.navigation.navigate('MyBag');
    });
  };

  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  render() {
    console.log(this.props.product.data[0].id);
    const data = this.props.product.data[0];
    return (
      <SafeAreaView style={style.parent}>
        <ScrollView>
          {data == undefined && <Spinner />}
          {!(data == undefined) && (
            <View>
              <View style={{marginHorizontal: '2%', marginBottom: 25}}>
                <View style={style.imageWrapper}>
                  <Image
                    source={{uri: `${API_URL}${data.Product_pictures[0].picture}`}}
                    style={style.image}
                  />
                </View>
                <View />
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '60%'}}>
                      <Text style={style.nameProduct}>{data.name}</Text>
                    </View>
                    <Text style={{marginLeft: 'auto', marginTop: 10}}>
                      Rp{data.price}
                    </Text>
                  </View>

                  <Text style={style.shopName}>Zalora Cloth</Text>
                  <View style={style.starWrapper}>
                    {data['AVG(rating)]'] < 0.5 &&
                      Array(5).fill(<Image source={Star} style={style.star} />)}
                    {data['AVG(rating)]'] >= 0.5 &&
                      data['AVG(rating)]'] < 1.5 &&
                      Array(1).fill(
                        <Image source={Activated} style={style.star} />,
                      )}
                    {data['AVG(rating)]'] > 0 &&
                      data['AVG(rating)]'] < 1.5 &&
                      Array(4).fill(<Image source={Star} style={style.star} />)}
                    {data['AVG(rating)]'] >= 1.5 &&
                      data['AVG(rating)]'] < 2.5 &&
                      Array(2).fill(
                        <Image source={Activated} style={style.star} />,
                      )}
                    {data['AVG(rating)]'] >= 1.5 &&
                      data['AVG(rating)]'] < 2.5 &&
                      Array(3).fill(<Image source={Star} style={style.star} />)}
                    {data['AVG(rating)]'] >= 2.5 &&
                      data['AVG(rating)]'] < 3.5 &&
                      Array(3).fill(
                        <Image source={Activated} style={style.star} />,
                      )}
                    {data['AVG(rating)]'] >= 2.5 &&
                      data['AVG(rating)]'] < 3.5 &&
                      Array(2).fill(<Image source={Star} style={style.star} />)}
                    {data['AVG(rating)]'] >= 3.5 &&
                      data['AVG(rating)]'] < 4.5 &&
                      Array(4).fill(
                        <Image source={Activated} style={style.star} />,
                      )}
                    {data['AVG(rating)]'] >= 3.5 &&
                      data['AVG(rating)]'] < 4.5 &&
                      Array(1).fill(<Image source={Star} style={style.star} />)}
                    {data['AVG(rating)]'] >= 4.5 &&
                      Array(5).fill(
                        <Image source={Activated} style={style.star} />,
                      )}
                    {data['AVG(rating)]'] > 0 ? (
                      <Text style={style.textRating}>
                        {' '}
                        ({data['AVG(rating)]']})
                      </Text>
                    ) : (
                      <Text style={style.textRating}> ({data.rating})</Text>
                    )}
                  </View>
                  <Text style={style.descProduct}>{data.description}</Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
        <View>
          <TouchableOpacity
            block
            activeOpacity={0.7}
            style={style.addToCart}
            onPress={() => this.addToCart()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
  cart: state.cart,
});

const mapDispatchToProps = {
  getProduct: productAction.getData,
  postCart: cartAction.postCart,
  getCart: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct);

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper: {
    height: 300,
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 11,
    color: 'grey',
  },
  starWrapper: {
    flexDirection: 'row',
    // marginVertical: 8,
  },
  star: {
    width: 12,
    height: 12,
  },
  textRating: {
    fontSize: 9,
    color: 'grey',
  },
  descProduct: {},
  textUnderNew: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '2%',
    marginBottom: 15,
    marginTop: 25,
  },
  cardViewWrapper: {
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'grey',
  },
  cardWrapper: {
    backgroundColor: 'tomato',
    width: 150,
    marginRight: 10,
  },
  cardImage: {
    height: 190,
  },
  shop: {
    color: 'grey',
    fontSize: 12,
  },
  addToCart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#DB3022',
    borderRadius: 30,
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginVertical: 10,
  },
});
