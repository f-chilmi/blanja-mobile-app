import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Card, CardItem} from 'react-native';

class Order extends Component {
  render() {
    return (
      <View style={style.parent}>
        <Text style={style.myProfile}>My orders</Text>
        <Card>
          <CardItem>
            <View style={style.flexDir}>
              <Text>Order No1947034</Text>
              <Text>05-12-2019</Text>
            </View>
            <View style={style.flexDir}>
              <Text>Tracking number: </Text>
              <Text>IW3475453455</Text>
            </View>
            <View style={style.flexDir}>
              <Text>Quantity</Text>
              <Text>3</Text>
            </View>
            <View style={style.flexDir}>
              <Text>Total amount: </Text>
              <Text>Rp 450000</Text>
            </View>
            <Text>Delivered</Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}

// export default Order;
const mapStateToProps = (state) => ({
  // home: state.home,
  // auth: state.auth,
});

const mapDispatchToProps = {
  // getHome: homeAction.getData,
  // getPopular: homeAction.getPopular,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

const style = StyleSheet.create({
  parent: {
    padding: '3%',
    flex: 1,
  },
  myProfile: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  flexDir: {
    flexDirection: 'row',
  },
});
