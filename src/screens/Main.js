import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

import Register from './Register';
import Login from './Login';
import Landing from './Landing';
import Home from './Home';
import PageProduct from './PageProduct';
import Category from './Category';
import Catalog from './Catalog';
import Catalog2 from './Catalog2';
import MyBag from './MyBag';
import Checkout from './Checkout';
import Shipping from './Shipping';
import NewAddress from './NewAddress';
import ChangeAddress from './ChangeAddress';
import Profile from './Profile';
import Setting from './Setting';
import Search from './Search';
import Order from './Order';
import TabNavigator from './TabNavigator';

import {connect} from 'react-redux';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Catalog"
        component={Catalog}
      />
      <Stack.Screen
        options={{
          title: 'Popular',
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="search" size={20} style={{marginRight: 10}} />
            </TouchableOpacity>
          ),
        }}
        name="Catalog2"
        component={Catalog2}
      />
      <Stack.Screen
        options={{title: 'Page product'}}
        name="PageProduct"
        component={PageProduct}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{title: 'Shipping address'}}
        name="Shipping"
        component={Shipping}
      />
      <Stack.Screen
        options={{title: 'Adding shipping address'}}
        name="NewAddress"
        component={NewAddress}
      />
      <Stack.Screen
        options={{title: 'Change address'}}
        name="ChangeAddress"
        component={ChangeAddress}
      />
      <Stack.Screen
        options={{title: 'Settings'}}
        name="Setting"
        component={Setting}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
      />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="search" size={20} style={{marginRight: 10}} />
            </TouchableOpacity>
          ),
          title: 'Categories',
        }}
        name="Category"
        component={Category}
      />
      <Stack.Screen
        options={{title: 'Page product'}}
        name="PageProduct"
        component={PageProduct}
      />
      <Stack.Screen
        options={{
          title: '',
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="search" size={20} style={{marginRight: 10}} />
            </TouchableOpacity>
          ),
        }}
        name="Catalog"
        component={Catalog}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

const MyBagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MyBag"
        component={MyBag}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Checkout"
        component={Checkout}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
      />
    </Stack.Navigator>
  );
};

const Shippingstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Shipping"
        component={Shipping}
      />
      <Stack.Screen
        options={{title: 'Change address'}}
        name="ChangeAddress"
        component={ChangeAddress}
      />
      <Stack.Screen
        options={{title: 'Adding shipping address'}}
        name="NewAddress"
        component={NewAddress}
      />
    </Stack.Navigator>
  );
};

class Main extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <NavigationContainer>
        {this.props.auth.isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="TabNavigator"
              component={TabNavigator}
            />
            <Stack.Screen
              options={{
                title: 'Popular',
                headerRight: () => (
                  <TouchableOpacity>
                    <Icon name="search" size={20} style={{marginRight: 10}} />
                  </TouchableOpacity>
                ),
              }}
              name="Catalog2"
              component={Catalog2}
            />
            <Stack.Screen
              options={{title: 'Page product'}}
              name="PageProduct"
              component={PageProduct}
            />
            <Stack.Screen
              options={{title: 'Shipping address'}}
              name="Shipping"
              component={Shipping}
            />
            <Stack.Screen
              options={{title: 'Adding shipping address'}}
              name="NewAddress"
              component={NewAddress}
            />
            <Stack.Screen
              options={{title: 'Change address'}}
              name="ChangeAddress"
              component={ChangeAddress}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Setting"
              component={Setting}
            />
            <Stack.Screen
              options={{
                headerRight: () => (
                  <TouchableOpacity>
                    <Icon name="search" size={20} style={{marginRight: 10}} />
                  </TouchableOpacity>
                ),
                title: 'Categories',
              }}
              name="Category"
              component={Category}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Catalog"
              component={Catalog}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Search"
              component={Search}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Checkout"
              component={Checkout}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Order"
              component={Order}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Landing"
              component={Landing}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

// export default Main;
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
