import React, { Component } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import { Container, Fab, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import imageCard from '../assets/imageCard.png'
import Star from '../assets/activated.png'

export default class PageProduct extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{marginHorizontal: '2%', marginBottom: 25}}>
          <View style={style.imageWrapper}>
            <Image style={style.image} source={imageCard} />
            <Image style={style.image} source={imageCard} />
          </View>
          <View></View>
          <View>
            <View style={{flexDirection: 'row' }}>
              <Text style={style.nameProduct}>Blouse Wanita</Text>
              <Text style={{marginLeft: 'auto', marginTop: 10}}>Rp150.000</Text>
            </View>

            <Text style={style.shopName}>Zalora Cloth</Text>
            <View style={style.starWrapper}>
              <Image source={Star} />
              <Image source={Star} />
              <Image source={Star} />
              <Image source={Star} />
              <Image source={Star} />
              <Text style={style.textRating}>(10)</Text>
            </View>
            <Text style={style.descProduct}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
        <TouchableOpacity block activeOpacity={0.7} style={style.addToCart} >
          <Text style={{color: 'white', fontWeight: 'bold'}}>ADD TO CART</Text>
        </TouchableOpacity>
        
        <View>
          <Text style={style.textUnderNew}>You've never seen it before!</Text>
          <View style={style.cardViewWrapper}>
            <TouchableOpacity onPress={this.pageProduct}>
            <Card style={style.cardWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={imageCard} style={style.cardImage}/>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.proceProduct}>30$</Text>
              </CardItem>
            </Card>
            </TouchableOpacity>
            <Card style={style.cardWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={imageCard} style={style.cardImage}/>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.proceProduct}>30$</Text>
              </CardItem>
            </Card>
            <Card style={style.cardWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={imageCard} style={style.cardImage}/>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.proceProduct}>30$</Text>
              </CardItem>
            </Card>
          </View>
        </View>
        
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  imageWrapper: {
    height: 300,
    backgroundColor: 'grey',
    flexDirection: 'row'
  },
  image: {
    width: '70%',
    height: '100%'
  },
  nameProduct: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  shopName: {
    fontSize: 11,
    color: 'grey'
  },
  starWrapper: {
    flexDirection: 'row',
    marginVertical: 8
  },
  textRating: {
    fontSize: 9,
    color: 'grey'
  },
  descProduct: {
    
  },
  textUnderNew: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '2%',
    marginBottom: 15,
    marginTop: 25
  },
  cardViewWrapper: {
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  cardWrapper: {
    backgroundColor: 'tomato',
    width: 150,
    marginRight: 10
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
    fontSize: 12
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
  },
})