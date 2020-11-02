import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {API_URL} from '@env';
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
} from 'native-base';

import imageHome from '../assets/Image.png';
import imageCard from '../assets/imageCard.png';
import Star from '../assets/Star.png';

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
    this.props.getHome();
    this.props.getPopular();
    this.props.getCategory();
  }

  pageProduct = () => {
    this.props.navigation.navigate('PageProduct');
    // console.log(id);
  };

  category = () => {
    this.props.navigation.navigate('Category');
  };

  render() {
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
        {data == undefined && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
            <p>Loading...</p>
          </div>
        )}
        {!isLoading && !isError && !(data == undefined) && (
          <ScrollView style={style.parent}>
            <View style={style.imageHomeWrapper}>
              <Image style={style.imageHome} source={imageHome} />
              <Text style={style.textHome}>Fashion Sale</Text>
            </View>
            <View>
              <Text style={style.textNew}>New</Text>
              <Text style={style.textUnderNew}>
                You've never seen it before!
              </Text>
              <ScrollView horizontal style={style.cardViewWrapper}>
                {data.length !== 0 &&
                  data.map((item) => (
                    <TouchableOpacity onPress={this.pageProduct}>
                      <Card style={style.cardWrapper}>
                        <CardItem cardBody style={{flexDirection: 'column'}}>
                          <Image
                            source={{uri: `${API_URL}${item.picture1}`}}
                            style={style.cardImage}
                          />
                          <View style={style.contentCard}>
                            <View style={style.starWrapper}>
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                            </View>
                            <Text style={style.shop}>Zalora Cloth</Text>
                            <Text style={style.nameProduct}>{item.name}</Text>
                            <Text style={style.proceProduct}>
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
              <Text style={style.textNew}>Popular</Text>
              <Text style={style.textUnderNew}>
                You've never seen it before!
              </Text>
              <ScrollView horizontal style={style.cardViewWrapper}>
                {data.length !== 0 &&
                  dataPopular.map((item) => (
                    <TouchableOpacity onPress={this.pageProduct}>
                      <Card style={style.cardWrapper}>
                        <CardItem cardBody style={{flexDirection: 'column'}}>
                          <Image
                            source={{uri: `${API_URL}${item.picture1}`}}
                            // source={{uri: `${API_URL}${item.picture1}`,}}
                            style={style.cardImage}
                          />
                          <View style={style.contentCard}>
                            <View style={style.starWrapper}>
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                              <Image source={Star} style={style.star} />
                            </View>
                            <Text style={style.shop}>Zalora Cloth</Text>
                            <Text style={style.nameProduct}>{item.name}</Text>
                            <Text style={style.proceProduct}>
                              Rp {item.price}
                            </Text>
                          </View>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </View>
          </ScrollView>
        )}
        {isLoading && !isError && data === 'undefined' && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!isLoading && !isError && data === 'undefined' && (
          <div className="spinner-border text-danger text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
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
  getCategory: homeAction.getCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'transparent',
  },
  imageHomeWrapper: {
    height: 400,
    marginBottom: 10,
  },
  imageHome: {
    height: 400,
    position: 'relative',
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
  textNew: {
    fontSize: 30,
    position: 'relative',
    marginLeft: '2%',
    marginTop: 20,
  },
  textUnderNew: {
    fontSize: 11,
    color: '#9B9B9B',
    marginLeft: '2%',
  },
  category: {
    marginTop: 10,
    height: 240,
    flexDirection: 'row',
    backgroundColor: 'grey',
  },
  cardCategoryWrapper: {
    width: 180,
  },
  cardCategoryImage: {
    width: '100%',
    height: '100%',
  },
  textCategory: {
    position: 'absolute',
    bottom: 70,
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 24,
  },
  cardViewWrapper: {
    height: 380,
    flexDirection: 'row',
  },
  cardWrapper: {
    width: 150,
    marginRight: 10,
    height: '98%',
    padding: '2%'
  },
  cardImage: {
    height: 190,
  },
  starWrapper: {
    flexDirection: 'row',
  },
  star: {
    width: 12,
    height: 12,
  },
  shop: {
    color: 'grey',
    fontSize: 12,
  },
});
