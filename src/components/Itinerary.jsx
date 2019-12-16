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

const mapStateToProps = state => {
    return {
      logged: state.user.logged,
      user: state.user.currentUser.username
    };
  };

const Itinerary = (props) => {
    
    const [itineraries, setItinerary ] = useState();
    useEffect(
        () => {
            getData(`https://mytinerary-marta-norma.herokuapp.com/api/itineraries/${props.navigation.getParam('cityName','default')}`,null, 
            (data)=>{setItinerary( data.map(it => <SelfItinerary it={it} logged={props.logged} user={props.user} />))});
        }, []
    );

    const [featuredCity =
        {name: 'cityName', cityArticle: 'lorem ipsum la re puta madre etc etc la historia de la city' }] = useState();


    return (
        <ScrollView >
   
            <View >
                <View style={styles.featCityContainer}>

                    <Image source={Pic} style={styles.featCityPic} />
                </View>
             { itineraries} 
            </View>
        </ScrollView>
    )
};
class SelfItinerary extends React.Component {

    state = {
        show: false,
        showComments:false
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
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.showHandler() }}>
                    <View style={styles.itContainer}>
                        <View style={styles.itDescript}>
                            <View style={styles.userImgContainer}>  
                            <Text style={{}}> {it.title} </Text>
                                {/* imagen del usuario */}
                                <Image style={styles.itUserPic} source={User} />
                            </View>
                            {/* nombre del usuario */}
                            <Text style={styles.itUser}>{it.user}</Text>
                            {/* titulo del itinerario */}
                          
                        </View>
                        {/* <Image source={Pic} style={styles.itPic}/>     */}
                        <View style={styles.itAnalytics}>
                            <Text style={styles.textAn}><Feather name='heart' style={styles.textAn} /> {it.rating}</Text>
                            <Text style={styles.textAn}><FontAwesome style={styles.textAn} name='star-o' /> {it.price}</Text>
                            <Text style={styles.textAn}><FontAwesome style={styles.textAn} name='comment-o' /> {it.comments}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                </TouchableOpacity>
              {/* CONDITIONED RENDERING OF ACTIVITIES AFTER TOUCHING ITINERARY */}
              {   
                    this.state.show==true 
                    ?<>
                    {/* llamado a Activity */}
                        <Activity  title={it.title} />
                        
                        <Button style={styles.commentBut} onPress={()=>this.showCommentsHandler()}title="COMMENTS"/>
                         {this.state.showComments==true ? <CommentsContainer logged={this.props.logged} user={this.props.user} title={it.title} /> : <></>}
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
        paddingRight: 4
    },
    featCityTitle: {
        textAlign: 'center'
    },
    featCityContainer: {
        alignItems: 'center',
        height: 160,
        flex: 1
    }
    ,
    featCityArticle: {
        textAlign: 'justify'
    },
    userImgContainer: {
        width: '100%',
        height: '100%'
    },
    featCityPic: {
        height: '90%',
        width: '90%',
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 8,
    },
    itContainer: {
        backgroundColor: 'white',
        margin: 1,
        paddingTop: 1,
        flexDirection: 'row',
        paddingLeft: 4,
        height: 110,
        flex: 1
    },
    itUser: {
        color: '#fff',
        margin: 1,
        paddingLeft: 3
    },
    itPic: {
        height: 80,
        width: 80,
        marginLeft: 5
    },
    itAnalytics: {
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5
    },
    itDescript: {
        flexDirection: 'column'
    },
    itUserPic: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    act: {
        backgroundColor: 'orange'
    },
    commentBut:{
        flex:1
    }

})
export default connect(mapStateToProps)(Itinerary);

