import React, { useState, useEffect } from 'react';
import { getData } from '../../requests';
import {Animated, Text, StyleSheet, TouchableOpacity, Image, Style, View, ScrollView} from 'react-native';


const Activity = (props)=>{
  
    const[activity, setActivity]=useState();

    useEffect(
        () => {
            getData(`https://mytinerary-marta-norma.herokuapp.com/api/itineraries/byTitle/${props.title}/activities`,null, 
            (data)=>{setActivity(
                <ScrollView  
                horizontal={true} 
                pagingEnabled 
                scrollEventThrottle={16}>
                    {data[0].activities.map((item, key)=> 
                    <View key={key} style={styles.actContainer}>
                    <Text sytle={styles.actTitle}>{item}</Text>
                    </View>)}
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
    backgroundColor:'#e5e6eb',
     margin:1, 
     padding:2,
     height:80,
     width:90,
    borderRadius:3
    },
    actTitle:{
    color:'red'
    }

})


export default Activity;