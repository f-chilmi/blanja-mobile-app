import React, { Component } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


import imageHome from '../assets/Image.png'
import imageCard from '../assets/imageCard.png'
import Star from '../assets/Star.png'

export default class Home extends Component {
  state = {
    data: [
      {
        nameProduct: 'Blouse Wanita',
        priceProduct: 150000,
        shopName: 'Zalora',
        image: {imageCard}
      },
      {
        nameProduct: 'T-Shirt Boy',
        priceProduct: 160000,
        shopName: 'Mango',
        image: {imageCard}
      }
    ]
    
  }

  pageProduct = () => {
    this.props.navigation.navigate('PageProduct')
  }

  category = () => {
    this.props.navigation.navigate('Category')
  }

  render() {
    // console.log(this.state.data)
    return (
      <ScrollView style={style.parent}>
        <View style={style.imageHomeWrapper}>
          <Image style={style.imageHome} source={imageHome} />
          <Text style={style.textHome}>Fashion Sale</Text>
        </View>

        <View>
          <Text style={style.textNew}>Category</Text>
            <View style={style.category}>
            <TouchableOpacity onPress={this.category}>
              <Card style={style.cardCategoryWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={imageCard} style={style.cardCategoryImage}/>
                <Text style={style.textCategory}>Category</Text>
              </CardItem>
            </Card>
            </TouchableOpacity>
          </View>
        </View>


        <View>
          <Text style={style.textNew}>New</Text>
          <Text style={style.textUnderNew}>You've never seen it before!</Text>
          <View style={style.cardViewWrapper}>
            {this.state.data.map(item=>{
              {console.log(item.nameProduct)}
              <Card style={style.cardWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={item.image} style={style.cardImage}/>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                {item.shopName}
                <Text style={style.shop}>{item.shopName}</Text>
                <Text style={style.nameProduct}>{`${item.nameProduct}`}</Text>
                <Text style={style.proceProduct}>Rp{item.priceProduct}</Text>
              </CardItem>
            </Card>
            })}
          </View>
        </View>
        <View>
          <Text style={style.textNew}>New</Text>
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
        
        <View>
          <Text style={style.textNew}>Popular</Text>
          <Text style={style.textUnderNew}>You've never seen it before!</Text>
          <View style={style.cardViewWrapper}>
            {this.state.data.map(item=>{
              {console.log(item.nameProduct)}
              <Card style={style.cardWrapper}>
              <CardItem cardBody style={{flexDirection: 'column'}}>
                <Image source={item.image} style={style.cardImage}/>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>{item.shopName}</Text>
                <Text style={style.nameProduct}>{`${item.nameProduct}`}</Text>
                <Text style={style.proceProduct}>Rp{item.priceProduct}</Text>
              </CardItem>
            </Card>
            })}
          </View>

        </View>

      </ScrollView>
    )
  }
}

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
    position: 'relative'
  },
  textHome: {
    position: "absolute",
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    bottom: 30,
    marginLeft: '2%'
  },
  textNew: {
    fontSize: 30,
    position: "relative",
    marginLeft: '2%',
    marginTop: 20
  },
  textUnderNew: {
    fontSize: 11,
    color: '#9B9B9B',
    marginLeft: '2%'
  },
  category: {
    marginTop: 10,
    height: 240,
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  cardCategoryWrapper: {
    width: 180,
  },
  cardCategoryImage: {
    width: '100%',
    height: '100%'
  },
  textCategory: {
    position: "absolute",
    bottom: 70,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
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
})