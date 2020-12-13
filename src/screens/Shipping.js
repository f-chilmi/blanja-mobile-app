import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Button, Card, CardItem, Spinner} from 'native-base';
import {connect} from 'react-redux';
import addressAction from '../redux/actions/address';

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
  changePrimary = (id) => {
    this.props.editPrimary(this.props.auth.token, id, {isPrimary: true});
    this.props.getAddress(this.props.auth.token);
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getAddress(this.props.auth.token);
    this.wait(500).then(() => this.setState({refreshing: false}));
  };
  render() {
    const {data} = this.props.address;
    return (
      <View style={style.parent}>
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
            {this.props.address.isLoading && (
              <Modal transparent visible>
                <View style={style.modalView}>
                  <View style={style.alertBox}>
                    <ActivityIndicator size="large" color="#DB3022" />
                    <Text style={style.textAlert}>Loading . . .</Text>
                  </View>
                </View>
              </Modal>
            )}
            {data.length > 0 &&
              data.map((item) => (
                <TouchableOpacity onPress={() => this.changePrimary(item.id)}>
                  <Card
                    style={item.isPrimary ? style.cardTrue : style.cardFalse}>
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
                </TouchableOpacity>
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
  cardTrue: {
    borderColor: '#DB3022',
    borderWidth: 1.5,
  },
  cardFalse: {
    borderColor: 'transparent',
    borderWidth: 1,
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
  modalView: {
    backgroundColor: 'grey',
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  profile: state.profile,
  address: state.address,
  auth: state.auth,
});
const mapDispatchToProps = {
  getAddress: addressAction.getAddress,
  addAddress: addressAction.addAddress,
  editPrimary: addressAction.editPrimary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
