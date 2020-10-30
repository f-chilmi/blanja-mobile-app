import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Landing from './src/screens/Landing'
import Home from './src/screens/Home'
import PageProduct from './src/screens/PageProduct'
import Category from './src/screens/Category'
import Catalog from './src/screens/Catalog'
import MyBag from './src/screens/MyBag'

import store from './src/redux/store'

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              options={{headerShown: false}}
              name='Landing'
              component={Landing}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='Register'
              component={Register}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='Login'
              component={Login}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='Home'
              component={Home}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='PageProduct'
              component={PageProduct}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='Category'
              component={Category}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='Catalog'
              component={Catalog}
            />
            <Stack.Screen 
              options={{headerShown: false}}
              name='MyBag'
              component={MyBag}
            />
          </Stack.Navigator>
          
          {/* <BottomTabs.Navigator>
            <BottomTabs.Screen 
              options={{
                tabBarIcon: ({size, color, focused}) =>  (
                  <Icon name='home' size={size} color={color} />
                ),
              }}
              name='Home'
              component={Home} />
            <BottomTabs.Screen 
              options={{
                tabBarIcon: ({size, color, focused}) =>  (
                  <Icon name='cart' size={size} color={color} />
                ),
              }}
              name='Login'
              component={Login} />
            <BottomTabs.Screen 
              options={{
                tabBarIcon: ({size, color, focused}) =>  (
                  <Icon name='cards-heart' size={size} color={color} />
                ),
              }}
              name='Register'
              component={Register} />
            <BottomTabs.Screen 
              options={{
                tabBarIcon: ({size, color, focused}) =>  (
                  <Icon name='account' size={size} color={color} />
                ),
              }}
              name='Landing'
              component={Landing} />
          </BottomTabs.Navigator> */}
        </NavigationContainer>
      </Provider>
      
    );
  }
}

export default App;
