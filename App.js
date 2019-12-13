import React from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
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
import Icon from 'react-native-vector-icons/Octicons';

openDrawer = () => {
  this.props.navigation.dispatch(DrawerActions.openDrawer());
}
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
  unmountInactiveRoutes: true,
});

const navigator = createStackNavigator({
  Drawer: MainDrawer,
},
{
  initialRouteName: 'Drawer',
  
  defaultNavigationOptions: (props) => ({
    headerLeft: <Icon name='three-bars' style={styles.hamburgerMenu} onPress={() => props.navigation.openDrawer()}/>,
    headerStyle:{
      backgroundColor:'#D82F00'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }, 
  })
});

const AppContainer = createAppContainer(navigator);

export default AppContainer;
const styles = StyleSheet.create({
  rutas: {
    color: 'red'
  },
  imagen: {
    marginTop: '90%'
  },
  hamburgerMenu:{
    fontSize: 35,
    paddingLeft: 15,
    color: 'white',
  }
})