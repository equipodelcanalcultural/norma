import React, { useRef } from 'react'
import {Text, StyleSheet, View, Image, Dimensions, Platform, TouchableOpacity, ImageBackground} from 'react-native'
import Carousel,  { ParallaxImage }  from 'react-native-snap-carousel';
import { getCurrentFrame } from 'expo/build/AR';
import myImages from '../Assets/Resources/myImages'

const { width: screenWidth } = Dimensions.get('window')

const CitiesCarousel = (props) => {
        // this.state = {
        //     carouselItems: [
        //     {
        //         illustration: require('../Assets/city_img/amsterdam.jpg'),
        //         title: 'Amsterdam'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/barcelona.jpg'),
        //         title: 'Barcelona'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/belgrade.jpg'),
        //         title: 'Belgrade'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/berlin.jpg'),
        //         title: 'Berlin'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/copenhagen.jpg'),
        //         title: 'Copenhagen'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/hamburg.jpg'),
        //         title: 'Hamburg'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/helsinki.jpg'),
        //         title: 'Helsinki'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/london.jpg'),
        //         title: 'London'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/madrid.jpg'),
        //         title: 'Madrid'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/milan.jpg'),
        //         title: 'Milan'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/munich.jpg'),
        //         title: 'Munich'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/napoli.jpg'),
        //         title: 'Napoli'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/new_york.jpg'),
        //         title: 'New York'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/oslo.jpg'),
        //         title: 'Oslo'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/paris.jpg'),
        //         title: 'Paris'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/prague.jpg'),
        //         title: 'Prague'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/rome.jpg'),
        //         title: 'Rome'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/sofia.jpg'),
        //         title: 'Sofia'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/stockholm.jpg'),
        //         title: 'Stockholm'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/vienna.jpg'),
        //         title: 'Vienna'
        //     },
        //     {
        //         illustration: require('../Assets/city_img/warsaw.jpg'),
        //         title: 'Warsaw'
        //     }
        // ]}

    const carouselRef = useRef(null)

    const data = Object.keys(myImages.cities);
    const goTo = (props) => props.navigation.navigate('Cities')
    let ciudades;
    if (data != undefined) {
        ciudades = data;
        ciudades = ciudades.map(item => (
            console.log("carousel",item),
            <Image width={200} height={200} source={myImages.cities[item]}/>
        ));
    } 

    

    _renderItem = ({item, index}, parallaxProps) => {    
        
        return (
            <View style={styles.item}>
                <ParallaxImage
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.citiesContainer}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Cities')}>
                    {ciudades}
                </TouchableOpacity>
            </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={data}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
}

export default CitiesCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        height:'40%',
        marginTop: 40
    },
    carousel: {
        borderRadius: 10,
        width: 100,
        height: 100
    },
    item: {
      width: screenWidth - 60,
      height: '100%',
    },
    imageContainer: {
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
    citiesContainer:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0, 
        right: 0,
        bottom: 0,
        zIndex: 1,
        height: '90%',
    },
    title:{
        fontSize: 50,
        alignSelf: 'stretch',
        textAlign:'center',
        backgroundColor: 'white',
        opacity: 0.8,
    }
})