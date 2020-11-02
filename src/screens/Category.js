import React, {Component} from 'react';
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
  Fab,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {connect} from 'react-redux';

import imageHome from '../assets/Image.png';

import homeAction from '../redux/actions/home';

const API_URL = 'http://127.0.0.1:8080';

class Category extends Component {
  allItem = () => {
    this.props.navigation.navigate('Catalog');
  };
  pageProduct = () => {
    this.props.navigation.navigate('PageProduct');
  };
  render() {
    const {categoryList} = this.props.home;
    return (
      <ScrollView>
        <TouchableOpacity
          block
          activeOpacity={0.7}
          style={style.buttonBlock}
          onPress={this.allItem}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            SHOW ALL ITEMS
          </Text>
        </TouchableOpacity>

        {categoryList.length !== 0 &&
          categoryList.map((item) => (
            <TouchableOpacity onPress={this.pageProduct}>
              <Card style={style.card}>
                <CardItem>
                  <Text style={style.categoryName}>{item.category}</Text>
                  <View style={{width: '50%', marginLeft: 'auto', backgroundColor: `${item.colorBackground}`}}>
                    <Image
                      style={style.img}
                      source={`${API_URL}${item.image}`}
                    />
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);

const style = StyleSheet.create({
  buttonBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#DB3022',
    borderRadius: 30,
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 30,
    marginBottom: 30,
  },
  card: {
    height: 200,
    backgroundColor: 'tomato',
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
