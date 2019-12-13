
import React,{ useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView,Button} from 'react-native'
import Pic from '../Assets/city_img/amsterdam.jpg'
import User from '../Assets/userb.png'
import Activity from './Activity'
import {useState} from 'react'
import {getData} from '../../requests';
import CommentsContainer from './Comments/commentsContainer';
import {serverurl} from '../../heroku'; 

const Itinerary =(props)=>{

    useEffect(
        ()=>{
            getData(`https://mytinerary-marta-norma.herokuapp.com/api/itineraries/${props.navigation.state.params.cityName}`,null, (data)=>{console.log(data)});
        }, []
    ); 
    const [itineraries=[
        {id:'0',name:'chori FF', city:'Buenos Aires',user:'17deOctubre24x7',likes:'13',rank:'11',comment:'8'},
        {id:'1',name:'prender fuego', city:'Buenos Aires',user:'Juan',likes:'23',rank:'4',comment:'1'},
        {id:'2',name:'chapoteando las patas', city:'Lujan',user:'el Lije',likes:'65',rank:'23',comment:'9'},
        {id:'3',name:'chapoteando las patas', city:'Lujan',user:'el Lije',likes:'65',rank:'23',comment:'9'}],]=useState();

    const[featuredCity=
        {name:'CityName',cityArticle:'lorem ipsum la re puta madre etc etc la historia de la city'}]=useState();   
        console.log(itineraries)
    return(

        /* //////////// IT = ITINERARIES///////////////////7 */

        <ScrollView>
        <View >
            <View style={styles.featCityContainer}>
             <Text style={styles.featCityTitle} >{featuredCity.name}</Text>
            <Image source={Pic} style={styles.featCityPic}/>
            <Text style={styles.featCityArticle}>
            {featuredCity.cityArticle}
            </Text>
            </View>
            {itineraries.map(it=> <SelfItinerary  it={it} />)}
        </View>
       
   </ScrollView>
    )    
};


/*//////////////////////////////////////// HIJO/////////////////////////////////////////// */

 class SelfItinerary extends React.Component {   
    state={
        show:false,
        showComments:false
    }
    showHandler = ()=>{
        this.setState({show:!this.state.show})
    }
    showCommentsHandler = ()=>{
        this.setState({showComments:!this.state.showComments})
    }
    render() {         
        let it=this.props.it
        console.log(it);
        return (
       
                <View>
                 <TouchableOpacity style={{flex:1}} onPress={()=>{this.showHandler()}}>
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
                         <Button title="comments"></Button>     
                    </View> 
                   
                    </TouchableOpacity>   

                    {/* CONDITIONED RENDERING OF ACTIVITIES AFTER TOUCHING ITINERARY */}
                    {   
                    this.state.show==true 
                    ?<>
                        <Activity/>
                        <Button onPress={()=>this.showCommentsHandler()}title="COMMENTS"/>
                         {this.state.showComments==true ? <CommentsContainer logged={true} user={'rodrigo'} title={'Barcelonata'} /> : <></>}
                    </>:
                    <></>}             
                </View>          
        );
    }
}
const styles = StyleSheet.create({ 
    
    featCityTitle:{
    textAlign:'center'
    },
    featCityContainer:{
        flexDirection:'row'
    }
    ,
    featCityArticle:{
        textAlign:'justify'
    },
    featCityPic:{
        height:90,
        width:90,
        padding:4
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
        width:40
    },
    act:{
        backgroundColor:'orange'
    }
})
export default Itinerary;