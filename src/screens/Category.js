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
import {Card, CardItem} from 'native-base';
import {connect} from 'react-redux';

import imageHome from '../assets/Image.png';

import homeAction from '../redux/actions/home';

const API_URL = 'http://127.0.0.1:8080';

class Category extends Component {
  componentDidMount = () => {
    this.props.getCategory();
  };
  allItem = () => {
    this.props.navigation.navigate('Catalog');
  };
  pageProduct = (id) => {
    this.props.navigation.navigate('PageProduct', {id});
  };
  catalogProduct = (id) => {
    this.props.navigation.navigate('Catalog', {id})
  }
  render() {
    const {categoryList} = this.props.home;
    console.log(this.props);
    return (
      <View style={style.parent}>
        <TouchableOpacity
          block
          activeOpacity={0.7}
          style={style.buttonBlock}
          onPress={()=>this.catalogProduct()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            SHOW ALL ITEMS
          </Text>
        </TouchableOpacity>
        <ScrollView>
          {categoryList.length !== 0 &&
            categoryList.map((item) => (
              <TouchableOpacity key={item.id.toString().concat(item.category)} onPress={()=>this.catalogProduct(item.id)}>
                <Card style={style.card}>
                  <CardItem style={{width: '100%', height: '100%'}}>
                    <Text style={style.categoryName}>{item.category}</Text>
                    <View
                      style={{
                        width: '50%',
                        marginLeft: 'auto',
                        backgroundColor: `${item.backgroundColor}`,
                      }}>
                      <Image
                        source={{uri: `${API_URL}${item.image}`}}
                        style={style.img}
                      />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

const style = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
  },
  buttonBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#DB3022',
    borderRadius: 30,
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 5,
    marginBottom: 5,
  },
  card: {
    height: 200,
    backgroundColor: 'tomato',
  },
  cardItem: {
    width: '100%',
    height: '100%',
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
