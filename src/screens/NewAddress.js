import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import addressAction from '../redux/actions/address';

class NewAddress extends Component {
  state = {
    nameAddress: '',
    recipientsName: '',
    recipientsPhone: '',
    address: '',
    postalCode: '',
    city: '',
  };

  addAddress = () => {
    const {
      nameAddress,
      recipientsName,
      recipientsPhone,
      address,
      postalCode,
      city,
    } = this.state;
    const data = {
      nameAddress,
      recipientsName,
      recipientsPhone,
      address,
      postalCode,
      city,
      isPrimary: true,
    };
    this.props.addAddress(this.props.auth.token, data);
  };

  goToshipping = () => {
    this.props.navigation.navigate('Shipping');
  };

  render() {
    return (
      <SafeAreaView>
        {this.props.address.alertMsg === 'New address added' &&
          this.goToshipping()}
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
        <ScrollView>
          <View style={style.parentContent}>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>Name address</Text>
              <TextInput
                name="nameAddress"
                onChangeText={(text) => this.setState({nameAddress: text})}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>Recipient's name</Text>
              <TextInput
                name="recipientsName"
                onChangeText={(text) => this.setState({recipientsName: text})}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>Recipient's phone</Text>
              <TextInput
                name="recipientsPhone"
                onChangeText={(text) => this.setState({recipientsPhone: text})}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>Address</Text>
              <TextInput
                name="address"
                onChangeText={(text) => this.setState({address: text})}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>Postal code</Text>
              <TextInput
                name="postalCode"
                onChangeText={(text) => this.setState({postalCode: text})}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.labelText}>City</Text>
              <TextInput
                name="city"
                onChangeText={(text) => this.setState({city: text})}
              />
            </View>
            <View style={style.btnBlock}>
              <Button
                block
                style={style.buttonCheckOut}
                onPress={this.addAddress}>
                <Text style={style.textCheckOut}>SAVE ADDRESS</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
  auth: state.auth,
});
const mapDispatchToProps = {
  getAddress: addressAction.getAddress,
  addAddress: addressAction.addAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);

const style = StyleSheet.create({
  parentContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
  },
  inputWrapper: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  labelText: {
    fontSize: 12,
    color: 'grey',
  },
  btnBlock: {
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
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
