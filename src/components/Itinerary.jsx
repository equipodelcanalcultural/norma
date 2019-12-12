
import React from 'react'
// import Carousel from 'react-native-anchor-carousel'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Pic from '../Assets/city_img/amsterdam.jpg'
import User from '../Assets/userb.png'
// import Activity from './Activity'
import {useState} from 'react'
import Activity from './Actitivy';

const Itinerary =()=>{

    const [itineraries=[
        {name:'chori FF', city:'Buenos Aires',user:'17deOctubre24x7',likes:'13',rank:'11',comment:'8'},
        {name:'prender fuego', city:'Buenos Aires',user:'Juan',likes:'23',rank:'4',comment:'1'},
        {name:'chapoteando las patas', city:'Lujan',user:'el Lije',likes:'65',rank:'23',comment:'9'}]]=useState();

       


    return(
        <View>
            <View style={styles.featCityContainer}>
            <Image source={Pic} style={styles.featCityPic}/>
            <Text style={styles.featCityArticle}>

            </Text>
            </View>
        


            {itineraries.map( it=><>
            <View >
                <TouchableOpacity>
                <View style={styles.itContainer}>
        
                        <View style={styles.itDescript}>
                            <Image style={styles.itUserPic}source={User}/>
                            <Text style={styles.itUser}>{it.user}</Text>
                            <Text style={{}}>{it.name}</Text>
                        </View>
                              <Image source={Pic} style={styles.itPic}/>    
                        <View style={styles.itAnalytics}>
                            <Text>Likes {it.likes}</Text>
                            <Text>Rank {it.rank}</Text>
                            <Text>Comments {it.comment}</Text>
                         </View>      
                    </View>
            </TouchableOpacity>
        </View>
               <Activity {...itineraries}/></>
 
        )}
        </View>

    )    
};

const styles = StyleSheet.create({ 
    featCityContainer:{
        flexDirection:'row',
    }
    ,
    featCityArticle:{
        textAlign:'justify',
    },
    featCityPic:{
        height:80,
        width:80,
    },
    itContainer:{
        backgroundColor:'red',
        margin:1,
        paddingTop:1,
        borderRadius: 10,
        flexDirection:'row',
        paddingLeft:4
    },
    itUser:{
        color:'#fff',
        margin:1,
        paddingLeft:3
    },
    itPic:{
      height:80,
      width:80,
      borderRadius: 10,     
      marginLeft:5
    },
    itAnalytics:{
        paddingLeft:3
    },
    itDescript:{
        flexDirection:'column'
    },
    itUserPic:{
        height:40,
        width:40,
    }
})
export default Itinerary;