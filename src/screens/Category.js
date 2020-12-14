import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import {connect} from 'react-redux';

import homeAction from '../redux/actions/home';

// const API_URL = 'http://127.0.0.1:8080';
import {API_URL} from '@env';

class Category extends Component {
  componentDidMount = () => {
    this.props.getCategory();
  };
  allItem = () => {
    const sort = 'limit=100&sort[updatedAt]=desc';
    this.props.navigation.navigate('Catalog', {sort});
  };
  pageProduct = (id) => {
    this.props.navigation.navigate('PageProduct', {id});
  };
  catalogProduct = (sort) => {
    this.props.navigation.navigate('Catalog', {sort});
    console.log(sort);
  };
  render() {
    const {categoryList} = this.props.home;
    console.log(this.props);
    return (
      <View style={style.parent}>
        <TouchableOpacity
          block
          activeOpacity={0.7}
          style={style.buttonBlock}
          onPress={this.allItem}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            SHOW ALL ITEMS
          </Text>
        </TouchableOpacity>
        <ScrollView>
          {categoryList.length !== 0 &&
            categoryList.map((item) => (
              <TouchableOpacity
                key={item.id.toString().concat(item.category)}
                onPress={() =>
                  this.catalogProduct(`search[category_id]=${item.id}`)
                }>
                <Card style={style.card}>
                  <CardItem style={style.cardItem}>
                    <Text style={style.categoryName}>{item.category}</Text>
                    <View style={style.imageWrapper}>
                      <Image
                        source={{uri: `${API_URL}${item.picture}`}}
                        style={style.img}
                      />
                      {console.log(`${API_URL}${item.picture}`)}
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth,
});

const mapDispatchToProps = {
  getCategory: homeAction.getCategory,
  categoryDetail: homeAction.categoryDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#DB3022',
    borderRadius: 30,
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 7,
    marginBottom: 7,
  },
  card: {
    height: 150,
    // backgroundColor: 'tomato',
    padding: 0,
  },
  cardItem: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '50%',
    marginLeft: 'auto',
    // backgroundColor: 'grey',
  },
  categoryName: {
    fontSize: 18,
  },
  imgWrap: {
    width: '50%',
    marginLeft: 'auto',
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
