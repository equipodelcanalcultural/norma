import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import Cities from './src/screens/Cities'
import Login from './src/components/login'
import Register from './src/components/Register'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Component: ComponentScreen,
  Cities: Cities,
  Login: Login,
  Register: Register,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#D82F00'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
      headerLeft: null,
      headerBackground: (
        <View style={{flexDirection:'row', alignItems:'flex-end',flex:1}}>
          <Image source={require('./src/Assets/userb.png')} style={{width: 50, height: 50, paddingBottom:10}}/>
        </View>
      ),
  }
});

export default createAppContainer(navigator);
