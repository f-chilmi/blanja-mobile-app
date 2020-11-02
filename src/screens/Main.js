import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Register from './Register';
import Login from './Login';
import Landing from './Landing';
import Home from './Home';
import PageProduct from './PageProduct';
import Category from './Category';
import Catalog from './Catalog';
import MyBag from './MyBag';
import Checkout from './Checkout';
import Shipping from './Shipping';
import NewAddress from './NewAddress';
import ChangeAddress from './ChangeAddress';
import Profile from './Profile';
import Setting from './Setting';

import {connect} from 'react-redux';

import auth from '../redux/actions/auth';

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
        options={{title: 'Page product'}}
        name="PageProduct"
        component={PageProduct}
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
        options={{title: 'Settings'}}
        name="Setting"
        component={Setting}
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

const CategoryStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Category"
        component={Category}
      />
      <Stack.Screen
        options={{title: 'Page product'}}
        name="PageProduct"
        component={PageProduct}
      />
      <Stack.Screen
        // options={{title: 'Page product'}}
        name="Catalog"
        component={Catalog}
      />
    </Stack.Navigator>
  )
}

class Main extends Component {
  state = {};

  render() {
    console.log(this.props.auth);
    return (
      <NavigationContainer>
        {/* <Stack.Navigator> */}
        {/* <Stack.Screen
            options={{title: 'Checkout'}}
            name='Checkout'
            component={Checkout}
          />
          <Stack.Screen
            options={{title: 'Change address'}}
            name='ChangeAddress'
            component={ChangeAddress}
          />
          <Stack.Screen
            options={{title: 'Adding shipping address'}}
            name='NewAddress'
            component={NewAddress}
          /> */}
        {/* <Stack.Screen
            options={{headerShown: false}}
            name='Profile'
            component={Profile}
          />
          <Stack.Screen
            options={{title: 'Shipping address'}}
            name='Shipping'
            component={Shipping}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Setting'
            component={Setting}
          />
        </Stack.Navigator> */}
        {this.props.auth.isLogin ? (
          <BottomTabs.Navigator>
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="home" size={size} color={color} />
                ),
              }}
              name="Home"
              component={HomeStack}
            />
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="shopping-cart" size={size} color={color} />
                ),
              }}
              name="Category"
              component={CategoryStack}
            />
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="shopping-bag" size={30} color="#900" />
                ),
              }}
              name="MyBag"
              component={MyBag}
            />
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="heart" size={size} color={color} />
                ),
              }}
              name="Shipping"
              component={Shipping}
            />
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="user" size={size} color={color} />
                ),
              }}
              name="Profile"
              component={ProfileStack}
            />
          </BottomTabs.Navigator>
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