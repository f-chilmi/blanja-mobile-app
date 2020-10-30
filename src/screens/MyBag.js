import React, { Component } from 'react'
import {SafeAreaView, ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Card, CardItem, Body, Button, Icon} from 'native-base'

import imageHome from '../assets/Image.png'

export default class MyBag extends Component {

  checkout = () => {
    this.props.navigation.navigate('Checkout')
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={style.title}>My Bag</Text>
          <Card style={style.card}>
            <CardItem>
              <Body style={style.body}>
                <View style={style.imageWrap}>
                  <Image source={imageHome} style={style.image} />
                </View>
                <View style={style.textRight}>
                  <Text style={style.nameProduct}>Blouse Wanita</Text>
                  <Text style={style.shop}>Zalora Cloth</Text>
                  <View style={style.qtyNPrice}>
                    <View style={style.qty}>
                      <Button style={style.button1}></Button>
                      <Text>1</Text>
                      <Button style={style.button2}></Button>
                    </View>
                    <View style={style.priceWrapper}>
                      <Text style={style.price}>Rp150.000</Text>  
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text style={style.textGrey}>Total amount:</Text>
                <Text style={style.textPrice}>Rp150.000</Text>
              </View>
              <View style={style.buttonBlock}>
                <Button block style={style.buttonCheckOut} onPress={this.checkout}>
                  <Text style={style.textCheckOut}>CHECK OUT</Text>
                </Button>
              </View>
            </CardItem>
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  title: {
    marginLeft: '2%',
    fontSize: 30,
    fontWeight: 'bold'
  },
  card: {
    height: 160
  },
  imageWrap: {
    width: '30%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  body: {
    flexDirection: 'row'
  },
  textRight: {
    marginLeft: 15
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  shop: {
    fontSize: 12,
    color: 'grey'
  },
  button1: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: 'tomato',
    marginRight: 15
  },
  button2: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: 'tomato',
    marginLeft: 15
  },
  qty: {
    flexDirection: 'row',
    marginRight: 20
  },
  qtyNPrice: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  priceWrapper: {
    alignSelf: 'flex-end'
  },
  textGrey: {
    fontSize: 15,
    color: 'grey',
  },
  textPrice: {
    marginLeft: 'auto'
  },
  buttonBlock: {
    width: '100%',
    marginTop: 20
  },
  buttonCheckOut: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
  },
  textCheckOut: {
    color: 'white'
  },
})