import React from "react";
import { Component } from "react";
/* import { Fragment } from "react"; */
import ImageButton from "./ImageButton";
import { View, Text, FlatList, Item, ScrollView } from "react-native";
class CitiesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fail"
    };
  }
  render() {
    const data = this.props.data;
    let ciudades;
    console.log(data);
    if (data != undefined) {
      ciudades = data;
      ciudades = ciudades.map(item => (
        <ImageButton style={{ width: '90%', margin: 10, padding: 10 }} key={item} width={200} height={200} ciudad={item} />
      ));
    } else {
      ciudades = "Loading...";
    }
    return <View>
<<<<<<< HEAD
        <ScrollView style={{ display: 'flex', width: 300,/*  backgroundColor: '#719bac', */ borderRadius: 5, overflow: 'hidden', padding: 15, margin: 10 }}>{ciudades}</ScrollView>
=======
        <ScrollView style={{ display: 'flex', width: 300,/*  backgroundColor: '#719BAC', */ borderRadius: 5, overflow: 'hidden', padding: 15, margin: 10 }}>{ciudades}</ScrollView>
>>>>>>> 44260a68bb557227c01aab9fa9a1e185ff441e08
      </View>;
  }
}
export default CitiesDisplay;

