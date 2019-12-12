import React from "react";
import { Component } from "react";
/* import Form from'react-bootstrap/Form'; */
import { TextInput } from 'react-native';

export default class CityInput extends Component {
  sendToParent = object => {
    this.props.callbackFromParent(object);
  };

  handleChange(event) {
    this.sendToParent({ input: event });
  }

 
  render() {
    return <TextInput type={"text"} 
    placeholder={"Find your next city"} 
    autoFocus={true}
    selectionColor={'blue'} 
    style={{
    fontWeight: '300', 
    fontSize: 20, 
    borderWidth: 1,
    borderRadius: 10, 
    borderColor: '#719bac',
    padding: 5 }}
    /* className={"col-md-3 ml-2 mr-2 mt-3 justify-content-center"} */
    onChangeText={e => this.handleChange(e)} />;
  }
}