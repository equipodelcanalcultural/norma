import React, { useEffect } from 'react'
// import Carousel from 'react-native-anchor-carousel'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import Pic from '../Assets/city_img/amsterdam.jpg'
import User from '../Assets/Resources/MYtinUser10.png'
import Activity from './Activity'
import { useState } from 'react'
import { getData } from '../../requests';
import { serverurl } from '../../heroku';
import { FontAwesome, Feather } from '@expo/vector-icons'; 
import CommentsContainer from './Comments/commentsContainer';
import {connect} from 'react-redux';
import myTexts from '../Assets/Resources/myTexts';
import LikesContainer from './Likes/LikesContainer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const mapStateToProps = state => {
    return {
      logged: state.user.logged,
      user: state.user.currentUser
    };
  };

const Itinerary = (props) => {
    
    const [itineraries, setItinerary ] = useState();
    useEffect(
        () => {
            getData(`https://mytinerary-marta-norma.herokuapp.com/api/itineraries/${props.navigation.getParam('cityName','default')}`,null, 
            (data)=>{setItinerary( data.map(it => <SelfItinerary it={it} logged={props.logged} navigation={props.navigation} user={props.user} />))});
        }, []
    );

    const [featuredCity =
        {name: 'cityName', cityArticle: 'lorem ipsum la re puta madre etc etc la historia de la city' }] = useState();


    return (
        <ScrollView>
            <Text style={styles.featCityTitle}>{props.navigation.getParam('cityName','default')}
            </Text>
            <View>
                <View style={styles.featCityContainer}>
                    <Image source={Pic} style={styles.featCityPic} />
                </View>
                <Text style={styles.featCityArticle}>{myTexts.cities[props.navigation.getParam('cityName','default')]}</Text>
             { itineraries} 

            </View>
       
        </ScrollView>
    )
};
class SelfItinerary extends React.Component {

    constructor(props){
        super(props);

       this.state = {
        show: false,
        showComments:false
    }   
 }
  

    showHandler = () => {
        this.setState({ show: !this.state.show })
    }

    showCommentsHandler = ()=>{
        this.setState({showComments:!this.state.showComments})
    }
    render() {

        let it = this.props.it
        console.log(it,"adentro de selfitinerary");
        console.log(this.props, 'estas son las props')
        return (
            <View>


                <TouchableOpacity onPress={() => { this.showHandler()}}>
                    <View style={styles.itContainer}>
                       <Text style={styles.itTitle}> {it.title} </Text>
                        <View >
                            <View style={styles.itDescript}>  
                         
                                {/* imagen del usuario */}
                            <Image style={styles.itUserPic} source={User} />
                            </View>
                            {/* nombre del usuario */}
                            <Text style={styles.itUser}>{it.user}</Text>
                            {/* titulo del itinerario */}
                          
                        </View >
                        {/* <Image source={Pic} style={styles.itPic}/>     */}

                        {/* Estadisticas de los itinerarios */}
                        <View >
                          <View style={styles.itAnalytics}>
                  {/*           <LikesContainer title={it.title}></LikesContainer>  */}
                            <Text style={styles.textAn}><FontAwesome style={styles.textAn} size={20} name='star-o' /> {it.price}</Text>
                            {/*Container y Boton de likes*/}
                            <LikesContainer title={it.title} itineraries={it.likes} user={this.props.user.email} logged={this.props.logged}></LikesContainer>
                            </View>
                            <View style={{alignItems:'center',marginTop:25, color:'#7e8696'}}>
                            {this.state.show==false ? <Icon name="arrow-down"/> :<Icon name="arrow-up"/> }
                            </View>
                        </View>
                    </View>    
                    <View/>
                </TouchableOpacity>
              {/* CONDITIONED RENDERING OF ACTIVITIES AFTER TOUCHING ITINERARY */}
              {   
                    this.state.show==true 
                    ?<>
                    {/* llamado a Activity */}
                        <Activity  title={it.title} />
                        <TouchableOpacity  onPress={()=>this.showCommentsHandler()} style={styles.commentBut}>
                            <Text style={{backgroundColor:'#a7adba',
                             textAlign:'center', 
                             color:'#ffff', 
                             marginRight:5,
                             textShadowColor: "rgba(75, 69, 69, 0.3)",
                             textShadowOffset: { width: 0, height: 1 },
                             textShadowRadius: 10}}>
                                COMMENTS... 
                                <FontAwesome name='comment-o' />
                            </Text>
                        </TouchableOpacity>
                         {this.state.showComments==true ? 
                         <CommentsContainer navigation={this.props.navigation}  logged={this.props.logged} user={this.props.user.username} title={it.title} /> 
                         : <></>}
                        </>:
                        <></>}      
                    </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    customStylesHere: {
        fontWeight: "bold",
        color: "orange"
    },
    textAn: {
        fontSize: 17,
        paddingRight: 4,
        marginLeft:3
    },
    featCityTitle: {
        textAlign: 'right',
        fontWeight: "bold",
        fontSize: 20,
        color: "#ffff",
        textShadowColor: "rgba(75, 69, 69, 1)",
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 10,
        position:'absolute',
        zIndex:200,
        paddingLeft:20
    },
    featCityContainer: {
        alignItems: 'center',
        height: 160,
        flex: 1
    }
    ,
    featCityArticle: {
        textAlign: 'justify',
        color:'#7e8696',
        padding:10
    },
    userImgContainer: {
        width: '100%',
        height: '100%'
    },
    featCityPic: {
        height: '100%',
        width: '100%',
        marginBottom: 20,
/*         marginTop: 10, */
        borderRadius: 6,
    },
    itContainer: {
        backgroundColor: '#f0f0f0',
        margin: 1,
        paddingTop: 1,
        flexDirection: 'row',
        height: 120,
        width:'100%',
        borderRadius:4
    },
    itUser: {
        color: '#fff',
        margin: 1,
        paddingLeft: 3
    },
    itUserPic: {
        height: 80,
        width: 80,
        paddingLeft:15,
        marginTop:10
    },
    itAnalytics: {
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5,
        marginTop:40,
        marginLeft:45,
        color:'#7e8696',
      
    },
    itTitle:{
        textAlign: 'right',
        fontWeight: "bold",
        fontSize: 18,
        color:'#a70000',
        textShadowRadius: 10,
        position:'absolute',
        zIndex:200,
        marginLeft:15
    },
    itDescript: {
        flexDirection: 'column'
    },
    itUserPic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        paddingTop:5
    },
    act: {
        backgroundColor: 'orange'
    },
    commentBut:{
        flex:1,
        paddingLeft:4,
        borderRadius:30
    }

})
export default connect(mapStateToProps)(Itinerary);

