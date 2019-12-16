import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Image } from "react-native";
import TextInput from "react-native-textinput-with-icons";
import { getData } from "../../requests";
import {connect} from 'react-redux';
import {userLoginFetch} from '../store/actions/userActions';

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

const mapStateToProps = state => {
  return {
    logged: state.user.logged,
  };
};

function Login(props) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setLogged] = useState();
  const [repeat, setRepeat] = useState(false);
  
  useEffect(() => {
    let bodyData = {
      username: user,
      password: password
    }
    
    props.userLoginFetch(bodyData);
    const {logged} = props;
    setLogged(logged);

  },
  
  [repeat == false]
  )

  return (
    <ImageBackground
      source={require("../Assets/login.png")}
      style={styles.backgroundImage}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoImage}
          source={require("../Assets/MYtinerarylogoSSJ3.png")}
        ></Image>
      </View>
      <View style={styles.logForm}>
        <TextInput
          style={styles.inputBox}
          leftIcon="person"
          leftIconType="oct"
          onChangeText={text => setUser(text)}
          value={user}
          label={"Username"}
        />
        <TextInput
          style={styles.inputBox}
          leftIcon="key"
          leftIconType="oct"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          value={password}
          label={"Password"}
        />
        <View style={styles.button}>
          <Button title="Login" onPress={() => setRepeat(!repeat)} />
        </View>
        <Logged logged={props.logged}></Logged>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  logForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
   maxHeight: '50%',
    minWidth: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    flex: 0.5
  },
  inputBox: {
    height: 40,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    
  },
  button: {
    paddingTop: "10%",
    width: "40%"
  },
 
  backgroundImage: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    maxHeight: "20%",
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
  
    width: '75%',
    flex: 1,
    resizeMode: 'contain'
},
});


function Logged (props) {
  return (
    <View>
      {props.logged ? <Text>Login Ok</Text> : <Text>Login No</Text>}
    </View>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);