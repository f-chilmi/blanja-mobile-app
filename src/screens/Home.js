import React, {Component} from 'react';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// import {API_URL} from '@env';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Spinner,
} from 'native-base';

import imageHome from '../assets/Image.png';
import imageCard from '../assets/imageCard.png';
import Star from '../assets/Star.png';
import Activated from '../assets/activated.png';

import homeAction from '../redux/actions/home';

const API_URL = 'http://127.0.0.1:8080';

class Home extends Component {
  state = {
    data: [
      {
        nameProduct: 'Blouse Wanita',
        priceProduct: 150000,
        shopName: 'Zalora',
        image: {imageCard},
      },
      {
        nameProduct: 'T-Shirt Boy',
        priceProduct: 160000,
        shopName: 'Mango',
        image: {imageCard},
      },
    ],
  };

  componentDidMount() {
    SplashScreen.hide();
    this.props.getHome();
    this.props.getPopular();
  }

  pageProduct = (id) => {
    this.props.navigation.navigate('PageProduct', {id});
  };

  category = () => {
    this.props.navigation.navigate('Category');
  };
  allNew = () => {
    this.props.navigation.navigate('Catalog');
  };
  allPopular = () => {
    this.props.navigation.navigate('Catalog2');
  };

  render() {
    console.log(this.props);
    const {
      isLoading,
      data,
      dataPopular,
      isError,
      alertMsg,
      categoryList,
    } = this.props.home;
    return (
      <ScrollView>
        {data !== undefined && (
          <ScrollView style={style.parent}>
            <View style={style.imageHomeWrapper}>
              <Image style={style.imageHome} source={imageHome} />
              <Text style={style.textHome}>Fashion Sale</Text>
            </View>
            <View>
              <View style={style.child}>
                <View style={style.wrapper}>
                  <Text style={style.textNew}>New</Text>
                  <TouchableOpacity
                    style={style.rightTextWrap}
                    onPress={this.allNew}>
                    <Text style={style.rightText}>View all</Text>
                  </TouchableOpacity>
                </View>
                <Text style={style.textUnderNew}>
                  You've never seen it before!
                </Text>
                <ScrollView horizontal style={style.cardViewWrapper}>
                  {data.length !== 0 &&
                    data.map((item) => (
                      <TouchableOpacity
                        key={item.id.toString().concat(item.name)}
                        onPress={() => this.pageProduct(item.id)}>
                        <Card style={style.cardWrapper}>
                          <CardItem cardBody style={{flexDirection: 'column'}}>
                            <Image
                              source={{uri: `${API_URL}${item.picture1}`}}
                              style={style.cardImage}
                            />
                            <View style={style.contentCard}>
                            <View style={style.starWrapper}>
                                {item.rating < 0.5 &&
                                  Array(5).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 0.5 &&
                                  item.rating < 1.5 &&
                                  Array(1).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating > 0 &&
                                  item.rating < 1.5 &&
                                  Array(4).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 1.5 &&
                                  item.rating < 2.5 &&
                                  Array(2).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 1.5 &&
                                  item.rating < 2.5 &&
                                  Array(3).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 2.5 &&
                                  item.rating < 3.5 &&
                                  Array(3).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 2.5 &&
                                  item.rating < 3.5 &&
                                  Array(2).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 3.5 &&
                                  item.rating < 4.5 &&
                                  Array(4).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 3.5 &&
                                  item.rating < 4.5 &&
                                  Array(1).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 4.5 &&
                                  Array(5).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating > 0 ? (
                                  <Text style={style.shop}>
                                    {' '}
                                    ({item.rating})
                                  </Text>
                                ) : (
                                  <Text style={style.shop}> (0)</Text>
                                )}
                              </View>
                              <Text style={style.shop}>Zalora Cloth</Text>
                              <View style={{height: 65}}>
                                <Text style={style.nameProduct}>
                                  {item.name.length > 60
                                    ? item.name.slice(0, 61).concat('...')
                                    : item.name}
                                </Text>
                              </View>
                              <Text style={style.priceProduct}>
                                Rp {item.price}
                              </Text>
                            </View>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>

              <View>
                <View style={style.wrapper}>
                  <Text style={style.textNew}>Popular</Text>
                  <TouchableOpacity
                    style={style.rightTextWrap}
                    onPress={this.allPopular}>
                    <Text style={style.rightText}>View all</Text>
                  </TouchableOpacity>
                </View>
                <Text style={style.textUnderNew}>
                  You've never seen it before!
                </Text>
                <ScrollView horizontal style={style.cardViewWrapper}>
                  {data.length !== 0 &&
                    dataPopular.map((item) => (
                      <TouchableOpacity
                        key={item.id.toString().concat(item.name)}
                        onPress={() => this.pageProduct(item.id)}>
                        <Card style={style.cardWrapper}>
                          <CardItem cardBody style={{flexDirection: 'column'}}>
                            <Image
                              source={{uri: `${API_URL}${item.picture1}`}}
                              // source={{uri: `${API_URL}${item.picture1}`,}}
                              style={style.cardImage}
                            />
                            <View style={style.contentCard}>
                              <View style={style.starWrapper}>
                                {item.rating < 0.5 &&
                                  Array(5).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 0.5 &&
                                  item.rating < 1.5 &&
                                  Array(1).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating > 0 &&
                                  item.rating < 1.5 &&
                                  Array(4).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 1.5 &&
                                  item.rating < 2.5 &&
                                  Array(2).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 1.5 &&
                                  item.rating < 2.5 &&
                                  Array(3).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 2.5 &&
                                  item.rating < 3.5 &&
                                  Array(3).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 2.5 &&
                                  item.rating < 3.5 &&
                                  Array(2).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 3.5 &&
                                  item.rating < 4.5 &&
                                  Array(4).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating >= 3.5 &&
                                  item.rating < 4.5 &&
                                  Array(1).fill(
                                    <Image source={Star} style={style.star} />,
                                  )}
                                {item.rating >= 4.5 &&
                                  Array(5).fill(
                                    <Image
                                      source={Activated}
                                      style={style.star}
                                    />,
                                  )}
                                {item.rating > 0 ? (
                                  <Text style={style.shop}>
                                    {' '}
                                    ({item.rating})
                                  </Text>
                                ) : (
                                  <Text style={style.shop}> (0)</Text>
                                )}
                              </View>
                              <Text style={style.shop}>Zalora Cloth</Text>
                              <View style={{height: 65}}>
                                <Text style={style.nameProduct}>
                                  {item.name.length > 60
                                    ? item.name.slice(0, 61).concat('...')
                                    : item.name}
                                </Text>
                              </View>
                              <Text style={style.priceProduct}>
                                Rp {item.price}
                              </Text>
                            </View>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        )}
        {dataPopular == undefined && <Spinner />}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth,
});

const mapDispatchToProps = {
  getHome: homeAction.getData,
  getPopular: homeAction.getPopular,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  child: {
    padding: '2%',
  },
  imageHomeWrapper: {
    height: 400,
    marginBottom: 10,
  },
  imageHome: {
    height: 400,
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },
  textHome: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    bottom: 30,
    marginLeft: '2%',
  },
  contentCard: {
    width: '100%',
  },
  nameProduct: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  priceProduct: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  rightText: {
    marginTop: 20,
    color: 'grey',
    fontSize: 13,
  },
  rightTextWrap: {
    marginLeft: 'auto',
  },
  textNew: {
    fontSize: 30,
    position: 'relative',
    marginLeft: '2%',
    width: '50%',
  },
  textUnderNew: {
    fontSize: 11,
    color: '#9B9B9B',
    marginLeft: '2%',
  },
  cardViewWrapper: {
    height: 315,
    flexDirection: 'row',
  },
  cardWrapper: {
    width: 150,
    marginRight: 10,
    height: '98%',
    padding: '2%',
    shadowRadius: 0,
    borderWidth: 0,
    borderColor: 'white',
  },
  cardImage: {
    height: 190,
    width: '100%',
  },
  starWrapper: {
    flexDirection: 'row',
  },
  star: {
    width: 12,
    height: 12,
    marginHorizontal: 2,
  },
  shop: {
    color: 'grey',
    fontSize: 7,
  },
});
