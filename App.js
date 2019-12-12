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
  initialRouteName: 'Drawer',
  
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
const styles = StyleSheet.create({
  arrowContainer:{
      flex: 1, 
      maxHeight: '27%', 
      width: '100%', 
      paddingBottom:"7%",
      alignItems:'center', 
      justifyContent: 'center',
  },
 
})

export default createAppContainer(navigator);
