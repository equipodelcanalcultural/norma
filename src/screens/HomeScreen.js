import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import CitiesCarousel from '../components/CitiesCarousel'
import Browser from '../components/Browser'

const HomeScreen = (props) => {
    const { navigation } = props
    return (
        <View style={styles.home}>
            <View style={styles.imageContainer}>
                <Image style={styles.itineraryImage} source={require('../Assets/MYtinerarylogoSSJ3.png')}></Image>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Find your perfect trip!{"\n"}Designed by insiders who know and love their cities.</Text>
            </View> 
            <CitiesCarousel navigation={navigation} />
            <Browser navigation={navigation} />
        </View>
    )
};


const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    imageContainer: {
        flex: 1,
        maxHeight: '20%',
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itineraryImage: {
        height: '100%',
        width: '85%',
        flex: 1
    },
    textContainer: {
        height: '10%',
        width: '90%',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default HomeScreen;