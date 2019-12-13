import React, { useEffect } from 'react'
// import Carousel from 'react-native-anchor-carousel'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import Pic from '../Assets/city_img/amsterdam.jpg'
import User from '../Assets/Resources/MYtinUser10.png'
import Activity from './Activity'
import { useState } from 'react'
import { getData } from '../../requests';
import { serverurl } from '../../heroku';
import { FontAwesome, Feather } from '@expo/vector-icons';

const Itinerary = () => {
    useEffect(
        () => {
            getData(`${serverurl}api/itineraries`, null, (data) => { console.log(data) });
        }, []
    );
    const [itineraries = [
        { id: '0', name: 'chori FF', city: 'Buenos Aires', user: '17deOctubre24x7', likes: '13', rank: '11', comment: '8' },
        { id: '1', name: 'chori FF', city: 'Buenos Aires', user: '17deOctubre24x7', likes: '13', rank: '11', comment: '8' },
        { id: '2', name: 'chori FF', city: 'Buenos Aires', user: '17deOctubre24x7', likes: '13', rank: '11', comment: '8' },
        { id: '3', name: 'chori FF', city: 'Buenos Aires', user: '17deOctubre24x7', likes: '13', rank: '11', comment: '8' },],] = useState();
    const [featuredCity =
        { name: 'CityName', cityArticle: 'lorem ipsum la re puta madre etc etc la historia de la city' }] = useState();
    console.log(itineraries)
    return (
        <ScrollView>
            <View >
                <View style={styles.featCityContainer}>
                    <Image source={Pic} style={styles.featCityPic} />
                </View>
                {itineraries.map(it => <SelfItinerary it={it} />)
                }
            </View>
        </ScrollView>
    )
};
class SelfItinerary extends React.Component {
    state = {
        show: false
    }
    showHandler = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        let it = this.props.it
        console.log(it);
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.showHandler() }}>
                    <View style={styles.itContainer}>
                        <View style={styles.itDescript}>
                            <View style={styles.userImgContainer}>
                                <Image style={styles.itUserPic} source={User} />
                            </View>
                            <Text style={styles.itUser}>{it.user}</Text>
                            <Text style={{}}>{it.name}</Text>
                        </View>
                        {/* <Image source={Pic} style={styles.itPic}/>     */}
                        <View style={styles.itAnalytics}>
                            <Text style={styles.textAn}><Feather name='heart' style={styles.textAn} /> {it.likes}</Text>
                            <Text style={styles.textAn}><FontAwesome style={styles.textAn} name='star-o' /> {it.rank}</Text>
                            <Text style={styles.textAn}><FontAwesome style={styles.textAn} name='comment-o' /> {it.comment}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                </TouchableOpacity>
                {
                    this.state.show == true
                        ? <Activity /> : <>{/* <Text style={styles.act}>Activities</Text> */}</>}
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
})
export default Itinerary;

