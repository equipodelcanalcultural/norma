import React, { useState } from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, Style, View, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';

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
            } 
        ]

    ]=useState();

    _scrollX = new Animated.Value(0);
    
    return( 
        
        <Animated.ScrollView
        pagingEnabled
        scrollEventThrottle={10}       
        horizontal
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset:{x:this._scrollX}}}],
            {useNativeDriver: true}
        )}
        >
            {activities.map(
                act=><View key={activities.id} style={styles.actContainer}>                    
                    <Text style={styles.actTitle}>{act.name}</Text>
                    <Text>{act.city}</Text>
                    <Text>{act.likes}</Text>
                    <Text>{act.rank}</Text>
                    <Text>{act.pic}</Text>
                    </View>
                    )}
        </Animated.ScrollView>
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