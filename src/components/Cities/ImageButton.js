import React from "react";
import { Component } from "react";
import myImages from "../../Assets/Resources/myImages";
import { TouchableOpacity } from "react-native";
import { View, Text, ImageBackground } from "react-native";

_onPressCity = (props) => {
  const cityName = props.ciudad;
  props.navigation.navigate("Itinerary", { cityName });
};

class ImageButton extends Component {
  render() {
    let altura = this.props.height;
    let ancho = this.props.width;
    return (
      <View>
        <TouchableOpacity onPress={() => _onPressCity(this.props)}>
          <ImageBackground
            source={myImages.cities[this.props.ciudad]}
            style={{
              height: 150,
              width: 320,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              margin: 5
            }}
            imageStyle={{ borderRadius: 8 }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "#ffff",
                textShadowColor: "rgba(75, 69, 69, 0.75)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 10
              }}
            >
              {this.props.ciudad.replace(/[_]/, " ")}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ImageButton;
