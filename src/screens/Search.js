import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import homeAction from '../redux/actions/home';
import {connect} from 'react-redux';
import {API_URL} from '@env';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Input,
  Title,
  Card,
  CardItem,
  ActionSheet,
  Button,
  Item,
  Left,
  Body,
  Right,
} from 'native-base';
import Star from '../assets/Star.png';
import Activated from '../assets/activated.png';

class Search extends Component {
  state = {
    search: '',
  };
  pageProduct = (id) => {
    this.props.navigation.navigate('PageProduct', {id});
    console.log(id);
  };
  render() {
    console.log(this.props.home.dataSearch);
    return (
      <View style={{flex: 1, padding: '2%'}}>
        <Item searchbar rounded>
          <Icon style={{marginLeft: 15}} name="search" size={20} color="grey" />
          <Input
            style={{marginLeft: 10}}
            returnKeyType='search'
            onSubmitEditing={()=>this.props.searchItem(this.state.search)}
            placeholder="Search"
            onChangeText={(text) => this.setState({search: text})}
          />
        </Item>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.props.home.dataSearch !== undefined &&
              this.props.home.dataSearch.map((item) => (
                <TouchableOpacity
                  style={style.col}
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
                              <Image source={Activated} style={style.star} />,
                            )}
                          {item.rating > 0 &&
                            item.rating < 1.5 &&
                            Array(4).fill(
                              <Image source={Star} style={style.star} />,
                            )}
                          {item.rating >= 1.5 &&
                            item.rating < 2.5 &&
                            Array(2).fill(
                              <Image source={Activated} style={style.star} />,
                            )}
                          {item.rating >= 1.5 &&
                            item.rating < 2.5 &&
                            Array(3).fill(
                              <Image source={Star} style={style.star} />,
                            )}
                          {item.rating >= 2.5 &&
                            item.rating < 3.5 &&
                            Array(3).fill(
                              <Image source={Activated} style={style.star} />,
                            )}
                          {item.rating >= 2.5 &&
                            item.rating < 3.5 &&
                            Array(2).fill(
                              <Image source={Star} style={style.star} />,
                            )}
                          {item.rating >= 3.5 &&
                            item.rating < 4.5 &&
                            Array(4).fill(
                              <Image source={Activated} style={style.star} />,
                            )}
                          {item.rating >= 3.5 &&
                            item.rating < 4.5 &&
                            Array(1).fill(
                              <Image source={Star} style={style.star} />,
                            )}
                          {item.rating >= 4.5 &&
                            Array(5).fill(
                              <Image source={Activated} style={style.star} />,
                            )}
                          {item.rating > 0 ? (
                            <Text style={style.shop}> ({item.rating})</Text>
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
                        <Text style={style.priceProduct}>Rp {item.price}</Text>
                      </View>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
});
const mapDispatchToProps = {
  searchItem: homeAction.searchItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  col: {
    height: 310,
    width: '50%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '1%',
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
  subtitle: {
    fontSize: 12,
  },
  advFunc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    backgroundColor: '#ffff',
  },
  advFuncIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});
