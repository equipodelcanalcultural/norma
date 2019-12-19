import React from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import HomeScreen from './src/screens/HomeScreen'
import Cities from './src/screens/Cities'
import Login from './src/components/login'
import Register from './src/components/Register'
import Itinerary from './src/components/Itinerary';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { DrawerNavigatorItems as DrawerItems } from 'react-navigation-drawer';
import {StyleSheet, SafeAreaView,ScrollView,View, Image, Text, ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Octicons';
import {Provider} from 'react-redux';
import store from "./src/store/store";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

_openDrawer = (props) => {
  props.navigation.toggleDrawer();
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
  Register: Register
},
{
  initialRouteName: 'Register',
  
  defaultNavigationOptions: (props) => ({
    headerLeft: <View style={{flexDirection:'row'}}>
    <Icon name='three-bars' style={styles.hamburgerMenu} onPress={() => _openDrawer(props)}/>
    </View>,
    headerStyle:{
      backgroundColor:'#D82F00'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }, 
  })
});

AppContainer = createAppContainer(navigator);

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

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
  },
  greeting:{
    marginLeft:20,
    marginTop:5,
    textShadowColor: "rgba(75, 69, 69, 0.6)",
    textShadowOffset: { width: 1, height: 1},
    textShadowRadius: 10,
    color:'#fff',
    fontSize:20
  
  }
})