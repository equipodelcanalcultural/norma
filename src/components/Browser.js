import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Browser = (props) => {
    return(
        <TouchableOpacity style={styles.arrowContainer} onPress={() => props.navigation.navigate('Cities')}>
            <Image style={styles.arrow} source={require('../Assets/allCities2.png')}></Image> 
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    arrowContainer:{
        flex: 1, 
        maxHeight: '27%', 
        width: '100%', 
        paddingBottom:"7%",
        alignItems:'center', 
        justifyContent: 'center',
    },
    arrow:{
        height: '50%',
        width: '60%',
        
        resizeMode: 'contain'
    },
})

export default Browser;