import React, { useRef } from 'react'
import {Text, StyleSheet, View, Image, Button, Dimensions, Platform, TouchableOpacity, ImageBackground} from 'react-native'
import Carousel,  { ParallaxImage }  from 'react-native-snap-carousel';
import myImages from '../Assets/Resources/myImages'

const { width: screenWidth } = Dimensions.get('window')

const CitiesCarousel = (props) => {
        this.state = {
            carouselItems: [
            {
                title: 'Amsterdam'
            },
            {
                title: 'Barcelona'
            },
            {
                title: 'Belgrade'
            },
            {
                title: 'Berlin'
            },
            {
                title: 'Copenhagen'
            },
            {
                title: 'Hamburg'
            },
            {
                title: 'Helsinki'
            },
            {
                title: 'London'
            },
            {
                title: 'Madrid'
            },
            {
                title: 'Milan'
            },
            {
                title: 'Munich'
            },
            {
                title: 'Napoli'
            },
            {
                title: 'New_York'
            },
            {
                title: 'Oslo'
            },
            {
                title: 'Paris'
            },
            {
                title: 'Prague'
            },
            {
                title: 'Rome'
            },
            {
                title: 'Sofia'
            },
            {
                title: 'Stockholm'
            },
            {
                title: 'Vienna'
            },
            {
                title: 'Warsaw'
            }
        ]}

    const carouselRef = useRef(null)
    
    _onPressCarousel = (cityName) => {
        props.navigation.navigate('Itinerary', {cityName})
    }
    
    _renderItem = ({item, index}, parallaxProps) => {
        return (
            <TouchableOpacity onPress={() => this._onPressCarousel(item.title)}>
            <View style={styles.item}>
                <ParallaxImage
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.citiesContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                    <Image style={styles.carousel} source={myImages.cities[item.title]}/>
            </View>
            </TouchableOpacity>

        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={this.state.carouselItems}
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
        width: '100%',
        height: '95%',
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