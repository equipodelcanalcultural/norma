import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/screens/HomeScreen'
import Cities from './src/screens/Cities'
import Login from './src/components/login'
import Register from './src/components/Register'
import Itinerary from './src/components/Itinerary';
import { createAppContainer } from 'react-navigation';
//  import { DrawerItems } from 'react-navigation-drawer';
 import { DrawerNavigatorItems as DrawerItems } from 'react-navigation-drawer';
import {StyleSheet, SafeAreaView,ScrollView,View, Image, Text, ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

const MyDrawerNavigator ={ 
  Home: HomeScreen, 
  Cities: Cities,
  Itinerary: Itinerary,
  Login: Login,
  Register: Register
}

const MainDrawer = createDrawerNavigator(MyDrawerNavigator, {
  contentComponent: props => (
    <ScrollView>
      <View style={styles.rutas}>
         <DrawerItems {...props} />
         </View>
      <View>
      <Image style={styles.imagen} source={require('./src/Assets/side.png')} />
      </View>
    </ScrollView>
  ),
  unmountInactiveRoutes: true
});

const navigator = createStackNavigator({
  Drawer: MainDrawer,
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

const AppContainer = createAppContainer(navigator);

export default AppContainer;
const styles = StyleSheet.create({
  rutas: {
    paddingTop: '15%',
    color: 'red'
  },
  imagen: {
    marginTop: '30%'
  },
})