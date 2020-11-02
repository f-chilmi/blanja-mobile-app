import React, { Component } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import { Grid, Col, Card, CardItem, ActionSheet, Button, Item, Icon, Left, Body, Right } from 'native-base';

import imageHome from '../assets/Image.png'
import Star from '../assets/activated.png'

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
// var DESTRUCTIVE_INDEX = 3;
// var CANCEL_INDEX = 4;

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"],
    };
  }
  pageProduct = () => {
    this.props.navigation.navigate('PageProduct')
  }
  render() {
    console.log(this.state.options)
    return (
      <ScrollView>

          {/* <Button 
            onPress={
            ActionSheet.show(
              {
                options: this.state.options,
                // cancelButtonIndex: CANCEL_INDEX,
                // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              // buttonIndex => {
              //   this.setState({ clicked: BUTTONS[buttonIndex] });
              // }
            )}
          >
            <Text>Filter</Text>
          </Button> */}

        <Grid style={{flexWrap: 'wrap'}}>
          <Col style={style.col}>
          <TouchableOpacity onPress={this.pageProduct}>
            <Card style={style.card}>
              <CardItem cardBody style={{flexDirection: 'column', justifyContent: "flex-start"}}>
                <View style={style.imageWrapper}>
                  <Image source={imageHome} style={style.img} />
                </View>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.priceProduct}>Rp150.000</Text>
              </CardItem>
            </Card>
            </TouchableOpacity>
          </Col>
          <Col style={style.col}>
            <Card style={style.card}>
              <CardItem cardBody style={{flexDirection: 'column', justifyContent: "flex-start"}}>
                <View style={style.imageWrapper}>
                  <Image source={imageHome} style={style.img} />
                </View>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.priceProduct}>Rp150.000</Text>
              </CardItem>
            </Card>
          </Col>
          <Col style={style.col}>
            <Card style={style.card}>
              <CardItem cardBody style={{flexDirection: 'column', justifyContent: "flex-start"}}>
                <View style={style.imageWrapper}>
                  <Image source={imageHome} style={style.img} />
                </View>
                <View style={style.starWrapper}>
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                  <Image source={Star} style={style.star} />
                </View>
                <Text style={style.shop}>Zalora Cloth</Text>
                <Text style={style.nameProduct}>Blouse</Text>
                <Text style={style.priceProduct}>Rp150.000</Text>
              </CardItem>
            </Card>
          </Col>
        </Grid>
        
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  col: {
    height: 300,
    width: '50%'
  },
  card: {
    width: '100%',
    height: '100%'
  },
  imageWrapper: {
    height: 200,
    width: '100%'
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
    fontSize: 12
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceProduct: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})
