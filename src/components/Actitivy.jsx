import React, { useState } from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, Style, View} from 'react-native';

const Activity = ({itineraries})=>{
  
    const[
        activities=[
            {   
            name:'Fernet on the rocks',
            city:'Cordoba DC',
            likes:'1000',
            rank:'10',
            pic:'foto'
            },
            {   
            name:'Diving with sharks',
            city:'Java City',
            likes:'50',
            rank:'8',
            pic:'foto'
            },
            {   
            name:'Diving with sharks',
            city:'Java City',
            likes:'50',
            rank:'8',
            pic:'foto'
            } 
        ]

    ]=useState();

    
    return( 

        <View>
            {activities.map(
                act=><View style={styles.actContainer}>                    
                    <Text style={styles.actTitle}>{act.name}</Text>
                    <Text>{act.city}</Text>
                    <Text>{act.likes}</Text>
                    <Text>{act.rank}</Text>
                    <Text>{act.pic}</Text>
                    </View>
                    )}
        </View>
    )
}

const styles = StyleSheet.create({
    actContainer:{
    backgroundColor:'orange',
    padding:4
    },
    actTitle:{
    color:'#fff'    
    }

})


export default Activity;