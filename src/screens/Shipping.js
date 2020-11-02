import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Button, Card, CardItem, Spinner} from 'native-base';
import {connect} from 'react-redux';
import store from '../redux/store';
import addressAction from '../redux/actions/address';
import profileAction from '../redux/actions/profile';

class Shipping extends Component {
  state = {
    modal: false,
    data: '',
    nameAddress: '',
    recipientsName: '',
    address: '',
    recipientsPhone: '',
    city: '',
    postalCode: '',
    isPrimary: '',
  };

  componentDidMount() {
    this.props.getAddress(this.props.auth.token);
  }

  addNewAddress = () => {
    this.props.navigation.navigate('NewAddress');
  };
  changeAddress = () => {
    this.props.navigation.navigate('ChangeAddress');
  };
  render() {
    const {data, isLoading} = this.props.address;
    console.log(!(data == undefined));
    return (
      <View style={style.parent}>
        <Text style={style.shippingText}>Shipping address</Text>
        {!isLoading && !(data == undefined) && (
          <ScrollView>
            {data.length !== 0 &&
              data.map((item) => (
                <Card>
                  <CardItem style={{flexDirection: 'column'}}>
                    <View style={style.textUp}>
                      <View style={style.name}>
                        <Text>{item.recipientsName}</Text>
                      </View>
                      <TouchableOpacity onPress={this.changeAddress}>
                        <Text style={style.change}>Change</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={style.address}>
                      <Text>{item.address}</Text>
                      <Text>+62 {item.recipientsPhone}</Text>
                    </View>
                  </CardItem>
                </Card>
              ))}
            <Button
              block
              style={style.buttonCheckOut}
              onPress={this.addNewAddress}>
              <Text style={style.textCheckOut}>ADD NEW ADDRESS</Text>
            </Button>
          </ScrollView>
        )}
        {isLoading && <Spinner />}
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    padding: '3%',
  },
  shippingText: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
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
  buttonCheckOut: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 15,
  },
  textCheckOut: {
    color: 'black',
    fontSize: 14,
  },
});

const mapStateToProps = (state) => ({
  profile: state.profile,
  address: state.address,
  auth: state.auth,
});
const mapDispatchToProps = {
  // getProfile: profileAction.getProfile,
  getAddress: addressAction.getAddress,
  addAddress: addressAction.addAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
