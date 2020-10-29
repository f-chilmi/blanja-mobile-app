import React, { Component } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import { Grid, Col, Card, CardItem, Row, Form, Item, Picker, Icon, Left, Body, Right } from 'native-base';

import imageHome from '../assets/Image.png'
import Star from '../assets/activated.png'

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value= string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <ScrollView>

        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Filter"
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Popular" value="key0" />
              <Picker.Item label="Newest" value="key1" />
              <Picker.Item label="Price: lowest to high" value="key2" />
              <Picker.Item label="Price: highest to low" value="key3" />
            </Picker>
          </Item>
        </Form>

        <Grid>
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
