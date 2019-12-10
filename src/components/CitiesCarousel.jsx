import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import styles from './AppStyle'

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
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>{ item.title }</Text>
                <Image style={styles.Carousel} source={item.illustration}></Image>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              data={this.state.carouselItems}
              renderItem={this._renderItem}
              sliderWidth={250}
              itemWidth={250}
              autoplay={true}
            />
        );
    }
}