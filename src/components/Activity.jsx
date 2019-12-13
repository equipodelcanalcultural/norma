import React, { useState } from 'react';
import {Animated, Text, StyleSheet, TouchableOpacity, Image, Style, View, ScrollView} from 'react-native';


const Activity = ({itineraries})=>{
  
    const[
        activities=[
            {   
            id:'0',
            name:'Fernet on the rocks',
            city:'Cordoba DC',
            likes:'1000',
            rank:'10',
            pic:'foto'
            },
            {   
            id:'0',
            name:'Diving with sharks',
            city:'Java City',
            likes:'50',
            rank:'8',
            pic:'foto'
            },
            {   
            id:'0',
            name:'Diving with sharks',
            city:'Java City',
            likes:'50',
            rank:'8',
            pic:'foto'
            },
            {   
                id:'0',
                name:'La cuarta activity',
                city:'Java City',
                likes:'50',
                rank:'8',
                pic:'foto'
                }  
        ]

    ]=useState();

   /*  _scrollX = new Animated.Value(0); */
    
    return( 
        <View style={{flex:1}}>
        <ScrollView style={{width:'100%'}} horizontal={true}>
            {activities.map(act=>
 
                <View key={activities.id} style={styles.actContainer}> 
                                  
                    <Text style={styles.actTitle}>{act.name}</Text>
                    <Text>{act.city}</Text>
                    <Text>{act.likes}</Text>
                    <Text>{act.rank}</Text>
                    <Text>{act.pic}</Text>
                </View>

                    )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    actContainer:{
    backgroundColor:'orange',
     margin:3, padding:2,
    borderRadius:10
    },
    actTitle:{
    color:'red'
    }

})


export default Activity;