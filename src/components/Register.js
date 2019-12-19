//Rodri no pude hacerlo funcionar, lo mejor que pude llegar a hacer es que salgan los dos carteles como terminamos viendo ayer.
//Intenté retrasar el setteo del created con una condición que se llama [loaded] que se settea al hacer press en Sign Up,
//puede que por ahí haya una idea de algo pero no lo pude hacer funcionar.

import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { View, Button, StyleSheet, ImageBackground, Alert } from "react-native";
import TextInput from "react-native-textinput-with-icons";
import { CheckBox } from "react-native-elements";
import { getData } from "../../requests";
import { connect } from "react-redux";
import { userPostFetch } from "../store/actions/userActions";

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

const mapStateToProps = state => {
  return {
    created: state.user.created
  };
};

function Register(props) {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);
  const [isCreated, setCreated] = useState();
  const [repeat, setRepeat] = useState(false);
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    const bodyData = {
      username: username,
      password: password,
      email: email,
    };
    const fetch = async () => {
      await props.userPostFetch(bodyData);
      await setLoaded(true);
    };
    fetch();
  },[repeat]);

  useEffect(() => {
    const { created } = props;
    setCreated(created);

    if (isCreated == false) {
      setRepeat(false);
    }
  },[loaded]);

  return (
    <ImageBackground
      source={require("../Assets/navidad1.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          label="Name"
          leftIcon="person"
          leftIconType="oct"
          rippleColor="blue"
          value={username}
          onChangeText={username => setUser(username)}
        />
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          autoCapitalize="none"
          leftIcon="mention"
          leftIconType="oct"
          placeholderTextColor="white"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          secureTextEntry={true}
          leftIcon="key"
          leftIconType="oct"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={password => setPassword(password)}
        />
        <CheckBox
          title="Accept terms and conditions"
          checkedIcon="check-square-o"
          uncheckedIcon="square-o"
          checked={check}
          onPress={() => setCheck(!check)}
        />
        <View style={styles.button}>
          <Button
            title="Sign Up"
            onPress={() => {
              setRepeat(!repeat);
            }}
          />
          <SignUp
            created={props.created}
            navigation={props.navigation}
            repeat={repeat}
            loaded={loaded}
          ></SignUp>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "25%"
  },
  button: {
    width: "30%",
    paddingTop: "10%"
  },
  register: {
    paddingBottom: "10%"
  },
  backgroundImage: {
    flex: 1
  }
});

class SignUp extends React.Component {
  render() {
    console.log("loaded", this.props.loaded)
    return (
      <Fragment>
        {this.props.created == true && this.props.loaded == true ? (
          Alert.alert("User Created", "Please Login", [
            { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
          ])
        ) : this.props.created == false && this.props.repeat == true && this.props.loaded == true ? (
          Alert.alert("Register Error", "User may already exist", [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ])
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
