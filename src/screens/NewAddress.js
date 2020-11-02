import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
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

export default class NewAddress extends Component {
  state = {
    nameAddress: '',
    recipientsName: '',
    recipientsPhone: '',
    address: '',
    postalCode: '',
    city: '',
  };
  render() {
    return (
      <SafeAreaView>
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
              <Text style={style.labelText}>Recipient's name</Text>
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
                onPress={this.goToshipping}>
                <Text style={style.textCheckOut}>SAVE ADDRESS</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
    paddingRight: '3%'
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
