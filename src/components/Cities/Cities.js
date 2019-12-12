import React from "react";
import { Component } from "react";
import CitiesDisplay from "./CitiesDisplay.js";
import CityInput from "./CityInput";
import { View, Text } from 'react-native';
import myImages from '../../Assets/Resources/myImages'

const filterCitiesByFirstLetter = (items, letter) => {
  let cities = items;
  console.log(typeof letter)
  cities = cities.filter(
    city =>
      city.slice(0, letter.length).toUpperCase() ===
      letter.slice(0, letter.length).toUpperCase()
  );
  console.log(cities);
  return cities;
};

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      dataSource: ''
    };
    this.callBack = this.callBack.bind(this);
  }

  callBack(obj) {
    this.setState(obj);
  }

  render() {
    var listaDeCiudades = Object.keys(myImages.cities);
    var letra = this.state.input;
    var ciudades = '';

    if (listaDeCiudades != undefined) {
      ciudades = listaDeCiudades;
      if (letra != "") {
        ciudades = filterCitiesByFirstLetter(listaDeCiudades, letra);
      }
    }

    return <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>Destination: </Text>
      <CityInput callbackFromParent={this.callBack} />
      <CitiesDisplay data={ciudades} />
    </View>
  }
}

export default Cities;