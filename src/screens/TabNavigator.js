import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabs = createBottomTabNavigator();

import Home from './Home';
import Category from './Category';
import MyBag from './MyBag';
import Profile from './Profile';

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: '#1e90ff',
        inactiveTintColor: 'gray',
      }}>
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="shopping-cart" size={25} color={color} />
          ),
        }}
        name="Category"
        component={Category}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="shopping-bag" size={25} color={color} />
          ),
        }}
        name="MyBag"
        component={MyBag}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
