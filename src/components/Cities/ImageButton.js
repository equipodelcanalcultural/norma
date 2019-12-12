import React from "react";
import { Component } from "react";
/* import { connect } from "react-redux"; */
import myImages from "../../Assets/Resources/myImages";
import { TouchableOpacity } from "react-native";
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

class ImageButton extends Component {
  render() {
    /* const { accion } = this.props; */
    let altura = this.props.height
    let ancho = this.props.width
    /* ${myImages.cities[this.props.ciudad]} */
    return (
      <View>
        <TouchableOpacity>
          <ImageBackground 
            source={myImages.cities[this.props.ciudad]}
            style={styles.citybackground}
              >
            <Text>{this.props.ciudad}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  citybackground: {
    height: 200, 
    width: 200
  }
})

export default ImageButton;