import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentScreen from './src/screens/ComponentScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Component: ComponentScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptinos:{
    title: 'App'
  }
});

export default createAppContainer(navigator);
