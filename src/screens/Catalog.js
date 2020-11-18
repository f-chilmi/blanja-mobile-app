import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BottomSheet} from 'react-native-btr';
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
  Root,
  Card,
  CardItem,
  ActionSheet,
  Button,
  Item,
  Left,
  Body,
  Right,
} from 'native-base';
import {Header} from 'react-native-elements';

import homeAction from '../redux/actions/home';

const API_URL = 'http://127.0.0.1:8080';

import Star from '../assets/Star.png';
import Activated from '../assets/activated.png';

const Catalog = ({route, navigation}) => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const data = home.dataCatalog;
  const [sort, setSort] = useState(false);
  console.log(sort);
  const toggle = () => {
    console.log('clicked');
    // setSort(!sort);
  };
  useEffect(() => {
    dispatch(homeAction.categoryDetail());
  }, [dispatch]);

  const nextPage = () => {
    if (home.info.nextLink) {
      dispatch(homeAction.nextAndPrevLinkCatalog(home.info.nextLink));
    }
  };

  const pageProduct = (id) => {
    navigation.navigate('PageProduct', {id});
  };

  const goToSearch = () => {
    navigation.navigate('Search');
  };

  console.log(navigation);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={style.col}
      key={item.id.toString().concat(item.name)}
      onPress={() => pageProduct(item.id)}>
      <Card style={style.cardWrapper}>
        <CardItem cardBody style={{flexDirection: 'column'}}>
          <Image
            source={{uri: `${API_URL}${item.picture1}`}}
            style={style.cardImage}
          />
          <View style={style.contentCard}>
            <View style={style.starWrapper}>
              {item.rating < 0.5 &&
                Array(5).fill(<Image source={Star} style={style.star} />)}
              {item.rating >= 0.5 &&
                item.rating < 1.5 &&
                Array(1).fill(<Image source={Activated} style={style.star} />)}
              {item.rating > 0 &&
                item.rating < 1.5 &&
                Array(4).fill(<Image source={Star} style={style.star} />)}
              {item.rating >= 1.5 &&
                item.rating < 2.5 &&
                Array(2).fill(<Image source={Activated} style={style.star} />)}
              {item.rating >= 1.5 &&
                item.rating < 2.5 &&
                Array(3).fill(<Image source={Star} style={style.star} />)}
              {item.rating >= 2.5 &&
                item.rating < 3.5 &&
                Array(3).fill(<Image source={Activated} style={style.star} />)}
              {item.rating >= 2.5 &&
                item.rating < 3.5 &&
                Array(2).fill(<Image source={Star} style={style.star} />)}
              {item.rating >= 3.5 &&
                item.rating < 4.5 &&
                Array(4).fill(<Image source={Activated} style={style.star} />)}
              {item.rating >= 3.5 &&
                item.rating < 4.5 &&
                Array(1).fill(<Image source={Star} style={style.star} />)}
              {item.rating >= 4.5 &&
                Array(5).fill(<Image source={Activated} style={style.star} />)}
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
  );

  return (
    <SafeAreaView style={style.parent}>
      <Header
        // leftComponent={<MyCustomLeftComponent />}
        centerComponent={<Text style={style.new}>New</Text>}
        rightComponent={
          <TouchableOpacity onPress={goToSearch}>
            <Icon name="search" size={20} style={{marginRight: 10}} />
          </TouchableOpacity>
        }
      />
      {/* <Header transparent>
        <Left />
        <Body>
          <Text style={style.new}>New</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={goToSearch}>
            <Icon name="search" size={20} style={{marginRight: 10}} />
          </TouchableOpacity>
        </Right>
      </Header> */}
      <View style={style.advFunc}>
        <TouchableOpacity>
          <View style={style.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Text style={style.subtitle}> Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSearch}>
          <View style={style.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Text style={style.subtitle}> Price: lowest to high</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={nextPage}
          onEndReachedThreshold={0.5}
        />
      </View>
      <BottomSheet
        visible={sort}
        onBackButtonPress={() => setSort(!sort)}
        onBackdropPress={() => setSort(!sort)}>
        <Text>You Component Here</Text>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Catalog;
// export default () => (
//   <Root>
//     <Catalog />
//   </Root>
// );

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  new: {
    fontSize: 20,
    fontWeight: 'bold',
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
