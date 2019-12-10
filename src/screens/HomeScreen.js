import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import CitiesCarousel from '../components/CitiesCarousel'

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Image source={require('../Assets/MYtineraryLogo.png')}></Image>
            <Text>My Itinerary Hola</Text>
            <CitiesCarousel/>
        </View>
 )
};

export default HomeScreen;