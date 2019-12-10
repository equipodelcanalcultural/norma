import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import Carousel from 'react-native-snap-carousel';
//import styles from './AppStyle'

export default class CitiesCarousel extends Component{
    constructor(props){
        super(props);
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
    }

    _renderItem = ({item, index}) => {
        return (
                <Image style={styles.carousel} source={item.illustration}/>
        );
    }

    render () {
        return (
            <Carousel
              data={this.state.carouselItems}
              renderItem={this._renderItem}
              sliderWidth={350}
              itemWidth={350}
              autoplay={true}
              layout={'tinder'}
            />
        );
    }
}


const styles = StyleSheet.create({
    carousel: {
        borderRadius: 10,
        height: '80%',
        width: '100%'
    }
})