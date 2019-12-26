import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
  Text
} from "react-native";
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

function usePayload(body, request) {
  const [myPayload, setMyPayload] = useState();
  const sendPayload = data => {
    request(data);
  };
  useEffect(() => setMyPayload(body));
  useEffect(() => sendPayload(myPayload));
}

function RegisterContainer(props) {
  const [payload, setPayload] = useState();
  const { userPostFetch } = props;
  const {created} = props;

  const sendPayload = data => {
    userPostFetch(data);
  };

  /*usePayload(payload, userPostFetch)*/

  useEffect(() => sendPayload(payload), [payload]);
console.log(props)
  return (
    <Fragment>

       <Register setPayload={setPayload}   navigation={props.navigation} created={created} /> 
     
    </Fragment>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

function Register({ setPayload, created }) {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  /*const [check, setCheck] = useState(false);*/

  const bodyData = {
    username: username,
    password: password,
    email: email
  };

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
        {/*  <CheckBox
          title="Accept terms and conditions"
          checkedIcon="check-square-o"
          uncheckedIcon="square-o"
          checked={check}
          onPress={() => setCheck(!check)}
      />*/}
        <View style={styles.button}>
          <Button title="Sign Up" onPress={() => setPayload(bodyData)} />
          <MyAlerts   navigation={props.navigation} value={created}></MyAlerts>

          {/*<SignUp
            created={created}
            navigation={props.navigation}
            repeat={repeat}
          ></SignUp>*/}
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
    console.log("prop created", this.props.created);

    return (
      <Fragment>
        {this.props.created && this.props.repeat == true ? (
          Alert.alert("User Created", "Please Login", [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("Login")
            }
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

const Cartel = ({ value }) => {
  
  return <Text>{value ? "created is true" : "created is false"}</Text>;
};
class MyAlerts extends React.Component  {
  state = {
    show: true
  }
render() {
console.log(this.props)
  let message;
  this.props.value == true
    ? (message = {
        primero: "User Created",
        segundo: "Please Login",
        press: () => this.props.navigation.navigate("Login")
      })
    : (message = {
        primero: "Register Error",
        segundo: "User may already exist",
        press: () => this.setState({show: !this.state.show})
      });
const MiCartel = () => {
  return (
    <View>
    <Text>{message.primero}</Text>
    <Text>{message.segundo}</Text>
    <Button title="Ok" onPress={()=> message.press()}></Button>
  </View>
  )
}
let showing;
this.state.show ? showing = <MiCartel/> : <></>
  return (
    <Fragment>
     {showing}
    </Fragment>
  );
}
};
