import React, {Component} from 'react';
import {API_URL} from '@env';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Button, Spinner} from 'native-base';
import {connect} from 'react-redux';
import addressAction from '../redux/actions/address';

class ChangeAddress extends Component {
  state = {
    nameAddress: '',
    recipientsName: '',
    recipientsPhone: '',
    address: '',
    postalCode: '',
    city: '',
  };
  componentDidMount() {
    this.props.getAddress(this.props.auth.token);
  }
  componentDidUpdate() {
    if (this.props.address.data !== undefined) {
      const {data} = this.props.address;
      if (this.state.nameAddress == '') {
        const data1 = data.find(
          (element) => element.id === this.props.route.params.id,
        );
        console.log(data1);
        this.setState({
          dataAddress: data1.dataAddress,
          nameAddress: data1.nameAddress,
          recipientsName: data1.recipientsName,
          recipientsPhone: data1.recipientsPhone,
          address: data1.address,
          postalCode: data1.postalCode,
          city: data1.city,
        });
        console.log('updating state');
      }
    } else {
      console.log('belum siap');
    }
  }
  changeAddress = () => {
    const data = {
      nameAddress: this.state.nameAddress,
      recipientsName: this.state.recipientsName,
      recipientsPhone: this.state.recipientsPhone,
      address: this.state.address,
      postalCode: this.state.postalCode,
      city: this.state.city,
    };
    const id = this.props.route.params.id;
    this.props.editAddress(this.props.auth.token, id, data);
    this.props.getAddress(this.props.auth.token);
  };
  render() {
    const {
      nameAddress,
      recipientsName,
      recipientsPhone,
      address,
      postalCode,
      city,
    } = this.state;
    console.log(this.state);
    return (
      <SafeAreaView>
        {this.state.nameAddress == '' && <Spinner />}
        {this.state.nameAddress !== '' && (
          <ScrollView>
            <View style={style.parentContent}>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>Name address</Text>
                <TextInput
                  name="nameAddress"
                  value={nameAddress}
                  onChangeText={(text) => this.setState({nameAddress: text})}
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>Recipient's name</Text>
                <TextInput
                  name="recipientsName"
                  value={recipientsName}
                  onChangeText={(text) => this.setState({recipientsName: text})}
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>Recipient's name</Text>
                <TextInput
                  name="recipientsPhone"
                  value={recipientsPhone}
                  onChangeText={(text) =>
                    this.setState({recipientsPhone: text})
                  }
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>Address</Text>
                <TextInput
                  name="address"
                  value={address}
                  onChangeText={(text) => this.setState({address: text})}
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>Postal code</Text>
                <TextInput
                  name="postalCode"
                  value={postalCode}
                  onChangeText={(text) => this.setState({postalCode: text})}
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.labelText}>City</Text>
                <TextInput
                  name="city"
                  value={city}
                  onChangeText={(text) => this.setState({city: text})}
                />
              </View>
              <View style={style.btnBlock}>
                <Button
                  block
                  style={style.buttonCheckOut}
                  onPress={this.changeAddress}>
                  <Text style={style.textCheckOut}>SAVE ADDRESS</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        )}
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
  editAddress: addressAction.editAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAddress);

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
});
