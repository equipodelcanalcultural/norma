import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default class CitiesCarousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
            {
                title:"Item 1",
                illustration: require('../Assets/city_img/amsterdam.jpg')
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
            {
                title:"Item 5"
            }
        ]}
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>{ item.title }</Text>
                <Image style={{height:150, width: 150}} source={item.illustration}></Image>
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