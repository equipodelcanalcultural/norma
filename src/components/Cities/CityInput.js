import React from "react";
import { Component } from "react";
/* import Form from'react-bootstrap/Form'; */
import TextInput from "react-native-textinput-with-icons";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    user: state.user.currentUser.username
  };
};

class CityInput extends Component {
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
        label= {this.props.user ? "Find your next city, " + this.props.user : "Find your next city"}
        autoFocus={false}
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

export default connect(mapStateToProps, null)(CityInput);
