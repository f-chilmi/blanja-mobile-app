import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Button, Card, CardItem, Spinner, Item, Input} from 'native-base';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    refreshing: false,
  };

  componentDidMount() {
    this.props.getAddress(this.props.auth.token);
  }

  addNewAddress = () => {
    this.props.navigation.navigate('NewAddress');
  };
  changeAddress = (id) => {
    this.props.navigation.navigate('ChangeAddress', {id});
  };
  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getAddress(this.props.auth.token);
    this.wait(2000).then(() => this.setState({refreshing: false}));
  };
  render() {
    const {data} = this.props.address;
    console.log(this.props.address);
    return (
      <View style={style.parent}>
        {/* <Item searchbar rounded>
          <Icon style={{marginLeft: 15}} name="search" size={20} color="grey" />
          <Input style={{marginLeft: 10}} placeholder="Search" />
        </Item> */}
        <Text style={style.shippingText}>Shipping address</Text>
        {data == undefined && this.props.address.isLoading && <Spinner />}
        {data == undefined &&
          this.props.address.alertMsg === 'No address found' && (
            <Text>{this.props.address.alertMsg}</Text>
          )}
        {!(data == undefined) && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }>
            {data.length > 0 &&
              data.map((item) => (
                <Card>
                  <CardItem style={{flexDirection: 'column'}}>
                    <View style={style.textUp}>
                      <View style={style.name}>
                        <Text>{item.recipientsName}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => this.changeAddress(item.id)}>
                        <Text style={style.change}>Change</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={style.address}>
                      <Text style={style.addresstext}>{item.address}</Text>
                      <Text style={style.addresstext}>
                        +62 {item.recipientsPhone}
                      </Text>
                    </View>
                  </CardItem>
                </Card>
              ))}
          </ScrollView>
        )}
        <Button block style={style.buttonCheckOut} onPress={this.addNewAddress}>
          <Text style={style.textCheckOut}>ADD NEW ADDRESS</Text>
        </Button>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    padding: '3%',
    flex: 1,
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
  addresstext: {
    fontSize: 12,
  },
  buttonCheckOut: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 8,
    marginBottom: 0,
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
