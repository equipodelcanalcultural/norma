import React from "react";
import { Component } from "react";
/* import Form from'react-bootstrap/Form'; */
import TextInput from "react-native-textinput-with-icons";
export default class CityInput extends Component {
  sendToParent = object => {
    this.props.callbackFromParent(object);
  };
  handleChange(event) {
    this.sendToParent({ input: event });
  }
  render() {
    return (
      <TextInput
        type={"text"}
        leftIcon="location"
        leftIconType="oct"
        onChangeText={text => setPassword(text)}
        label={"Find your next city"}
        autoFocus={true}
        style={{
          fontFamily: "sans-serif",
          fontWeight: "300",
          fontSize: 20,
          backgroundColor: "white",
          borderColor: "gray",
          borderWidth: 1,
        
          padding: 5
        }}
        
        onChangeText={e => this.handleChange(e)}
      />
    );
  }
}