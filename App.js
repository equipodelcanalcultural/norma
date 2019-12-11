import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import Cities from './src/screens/Cities'
import Login from './src/components/login'
import Register from './src/components/Register'

const drawer = createDrawerNavigator({
  Home: {
    name: 'Home',
    screen: HomeScreen
  },
  Cities: {screen: Cities},
  Register: {screen: Register},
  Login: {screen: Login},
});

const navigator = createStackNavigator({
  Drawer: drawer,
},
{
<<<<<<< HEAD
  initialRouteName: 'Drawer',
=======
  initialRouteName: 'Register',
>>>>>>> e3bd27a95135f7766f88f294f1cbb00e6c8c8ae4
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#D82F00'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }, 
  }
});

export default createAppContainer(navigator);
