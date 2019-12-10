import React, { useRef } from 'react'
import {Text, StyleSheet, View, Image, Dimensions, Platform} from 'react-native'
import Carousel,  { ParallaxImage }  from 'react-native-snap-carousel';
import { getCurrentFrame } from 'expo/build/AR';

const { width: screenWidth } = Dimensions.get('window')

const CitiesCarousel = (props) => {
    console.log(screenWidth)
        this.state = {
            carouselItems: [
            {
                illustration: require('../Assets/city_img/amsterdam.jpg')
            },
            {
                illustration: require('../Assets/city_img/paris.jpg')
            },
            {
                illustration: require('../Assets/city_img/barcelona.jpg')
            },
            {
                illustration: require('../Assets/city_img/berlin.jpg')
            },
            {
                illustration: require('../Assets/city_img/budapest.jpg')
            }
        ]}

    const carouselRef = useRef(null)

    _renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Image style={styles.carousel} source={item.illustration}/>
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
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                autoplay={true}
            />
        </View>
    );
}

export default CitiesCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        height:'40%',
    },
    carousel: {
        borderRadius: 10,
        width: '100%',
        height: '85%'
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
})