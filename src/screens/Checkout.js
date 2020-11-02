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
  Button,
  CheckBox,
  Card,
  CardItem,
  Row,
  Form,
  Item,
  Picker,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class Checkout extends Component {
  state = {
    isSelected: false
  }
  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };

  render() {
    return (
      <View>
        <View style={style.parent}>
          <Text style={style.shipping}>Shipping address</Text>
          <Card>
            <CardItem style={{flexDirection: 'column'}}>
              <View style={style.textUp}>
                <View style={style.name}>
                  <Text>Jane Doe</Text>
                </View>
                <TouchableOpacity onPress={this.goToshipping}>
                  <Text style={style.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <View style={style.address}>
                <Text>Wedoro Belahan gg.8 Waru</Text>
                <Text>+62 81328686883</Text>
              </View>
            </CardItem>
          </Card>

          <View style={style.payment}>
            <Text style={style.payText}>Payment</Text>
            <View style={style.blanjaWrap}>
              <Text style={style.blanjaPay}>BlanjaPay</Text>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={()=>this.setState({isSelected: !this.state.isSelected})}
                style={style.checkbox}
              />
            </View>
          </View>

          <Card transparent style={{alignSelf: 'flex-end'}}>
            <CardItem
              style={{flexDirection: 'column', backgroundColor: 'transparent'}}>
              <View style={style.textWrap}>
                <Text style={style.leftSide}>Order:</Text>
                <Text style={style.rightSide}>Rp150.000</Text>
              </View>
              <View style={style.textWrap}>
                <Text style={style.leftSide}>Delivery:</Text>
                <Text style={style.rightSide}>Rp15.000</Text>
              </View>
              <View style={style.textWrap}>
                <Text style={style.leftSide1}>Summary:</Text>
                <Text style={style.rightSide1}>Rp165.000</Text>
              </View>
              <Button block style={style.buttonCheckOut} >
                <Text style={style.textCheckOut}>SUBMIT ORDER</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

export default Checkout;

const style = StyleSheet.create({
  parent: {
    padding: '2%',
  },
  // shipping: {
  //   fontWeight: 'bold',
  //   marginVertical: 10,
  // },
  textUp: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  name: {
    width: '80%',
  },
  change: {
    color: '#DB3022',
  },
  address: {
    width: '100%',
  },
  payment: {
    marginTop: 30,
  },
  payText: {
    fontSize: 24,
    marginBottom: 15,
  },
  blanjaWrap: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  blanjaPay: {
    fontSize: 18,
    width: '89%',
  },
  checkbox: {
    marginTop: 5,
  },
  textWrap: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  leftSide: {
    width: '70%',
    fontSize: 11,
    color: 'grey',
  },
  rightSide: {
    fontSize: 11,
    marginLeft: 'auto',
  },
  leftSide1: {
    width: '70%',
    fontSize: 13,
    color: 'grey',
  },
  rightSide1: {
    fontSize: 13,
    marginLeft: 'auto',
  },
  buttonBlock: {
    width: '100%',
    marginTop: 20,
  },
  buttonCheckOut: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  textCheckOut: {
    color: 'white',
    fontSize: 14,
  },
});
