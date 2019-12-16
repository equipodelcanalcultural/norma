import React, { useState, useEffect } from 'react';
import { getData } from '../../requests';
import {Animated, Text, StyleSheet, TouchableOpacity, Image, Style, View, ScrollView} from 'react-native';


const Activity = (props)=>{
  
    const[activity, setActivity]=useState();

    useEffect(
        () => {
            getData(`https://mytinerary-marta-norma.herokuapp.com/api/itineraries/byTitle/${props.title}/activities`,null, 
            (data)=>{setActivity(
                <ScrollView  horizontal={true} pagingEnabled scrollEventThrottle={16}>
                {data[0].activities.map((item, key)=> <View key={key} style={styles.actContainer}><Text>{item}</Text></View>)}
                </ScrollView>
                
                )}
                
                /* setItinerary( data.map(it => <SelfItinerary it={it}/>)) */);
        }, []
    );

    
    return( 
        <View style={{flex:1}}>
        
       {activity}
            
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