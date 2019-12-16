import React from 'react'
import {Text, View} from 'react-native'
import Cities from '../components/Cities/Cities'

const CitiesScreen = (props) => {
    const { navigation } = props
    return(
        <Cities navigation={navigation}/>
    )
};

export default CitiesScreen;