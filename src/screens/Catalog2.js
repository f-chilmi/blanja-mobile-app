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
  Header,
  Content,
  Card,
  CardItem,
  ActionSheet,
  Button,
  Item,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

import homeAction from '../redux/actions/home';

const API_URL = 'http://127.0.0.1:8080';

import imageHome from '../assets/Image.png';
import Star from '../assets/activated.png';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class Catalog extends Component {

  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.categoryDetail(id);
  }

  pageProduct = (id) => {
    this.props.navigation.navigate('PageProduct', {id});
  };
  render() {
    console.log(this.props);
    const data = this.props.home.dataCatalog;
    return (
      <SafeAreaView style={style.parent}>
        <ScrollView>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {data.length !== 0 &&
              data.map((item) => (
                <TouchableOpacity style={style.col} onPress={()=>this.pageProduct(item.id)}>
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
                        <Text style={style.priceProduct}>Rp {item.price}</Text>
                      </View>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth,
});

const mapDispatchToProps = {
  getAll: homeAction.getAll,
  getPopular: homeAction.getPopular,
  categoryDetail: homeAction.categoryDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
  },
  col: {
    height: 310,
    width: '50%',
    backgroundColor: 'transparent',
  },
  cardWrapper: {
    width: '100%',
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
  contentCard: {
    width: '100%',
  },
  starWrapper: {
    flexDirection: 'row',
  },
  star: {
    width: 12,
    height: 12,
  },
  imageWrapper: {
    height: 200,
    width: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
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
    fontSize: 7,
  },
  nameProduct: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  priceProduct: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
