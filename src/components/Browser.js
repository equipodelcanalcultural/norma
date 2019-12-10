import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Browser = (props) => {
    return(
        <TouchableOpacity style={styles.arrowContainer} onPress={() => props.navigation.navigate('Cities')}>
            <Image style={styles.arrow} source={require('../Assets/circled-right-2.png')}></Image> 
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    arrowContainer:{
        flex: 1, 
        maxHeight: '20%', 
        width: '100%', 
        alignItems:'center', 
        justifyContent: 'center',
    },
    arrow:{
        maxHeight: 100,
        width: '40%',
        resizeMode: 'contain'
    },
})

export default Browser;