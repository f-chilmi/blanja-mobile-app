import React, { Component } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import { Container, Fab, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import imageHome from '../assets/Image.png'

export default class Category extends Component {

  allItem = () => {
    this.props.navigation.navigate('Catalog')
  }
  render() {
    return (
      <ScrollView>
        <TouchableOpacity block activeOpacity={0.7} style={style.buttonBlock} onPress={this.allItem} >
          <Text style={{color: 'white', fontWeight: 'bold'}}>SHOW ALL ITEMS</Text>
        </TouchableOpacity>

        <Card style={style.card}>
          <CardItem>
            <Text style={style.categoryName}>Electronics</Text>
            <View style={style.imgWrap}>
              <Image style={style.img} source={imageHome} />
            </View>
          </CardItem>
        </Card>
        <Card style={style.card}>
          <CardItem>
            <Text style={style.categoryName}>Electronics</Text>
            <View style={style.imgWrap}>
              <Image style={style.img} source={imageHome} />
            </View>
          </CardItem>
        </Card>
        <Card style={style.card}>
          <CardItem>
            <Text style={style.categoryName}>Electronics</Text>
            <View style={style.imgWrap}>
              <Image style={style.img} source={imageHome} />
            </View>
          </CardItem>
        </Card>

      </ScrollView>
    )
  }
}

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
    marginBottom: 30
  },
  card: {
    height: 200,
    backgroundColor: 'tomato'
  },
  categoryName: {
    fontSize: 18
  },
  imgWrap: {
    width: '50%',
    marginLeft: 'auto'
  },
  img: {
    height: '100%',
    width: '100%',
  }
})