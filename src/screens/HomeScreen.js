import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import CitiesCarousel from '../components/CitiesCarousel'

const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <Image source={require('../Assets/MYtineraryLogo.png')}></Image>
            <Text>My Itinerary Hola</Text>
            <CitiesCarousel/>
        </View>
 )
};


const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default HomeScreen;