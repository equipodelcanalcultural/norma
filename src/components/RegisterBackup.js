import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { View, Button, StyleSheet, ImageBackground, Alert, AsyncStorage} from "react-native";
import TextInput from "react-native-textinput-with-icons";
import { CheckBox } from "react-native-elements";
import { getData } from "../../requests";



function Register(props) {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);
 
  const bodyData = {
    username: username,
    password: password,
    email: email
  };


  function registerUser(userData) {
    getData("https://mytinerary-marta-norma.herokuapp.com/api/users/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(userData)
          },(data) => { 
                 if(data.success) {
                  AsyncStorage.setItem("token", data.token);
                  console.log('register success')
                  Alert.alert("User Created", "Please Login", [
                    { text: "OK", onPress: () => props.navigation.navigate("Login") 
                     }
                  ])
                }else{
                  AsyncStorage.removeItem("token");
                  console.log(data.msg);
                  Alert.alert("Register Error", "User may already exist", [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ])
                }  
          }) 
        }
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
              registerUser(bodyData);
              
            }}
          />
         {/* <SignUp
            created={props.created}
            navigation={props.navigation}
            repeat={repeat}
         ></SignUp> */}
         {/* <MyAlerts value={props.created} navigation={props.navigation} repeat={repeat}/>*/}
        

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

/*class SignUp extends React.Component {
  render() {
    const {created} = this.props
    console.log("prop created", this.props.created)
    console.log('created in store', created)
    
 
    return (
      <Fragment>
        {created && this.props.repeat == true ? (
          Alert.alert("User Created", "Please Login", [
            { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
          ])
        ) : created == false && this.props.repeat == true ? (
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
*/


export default Register;
