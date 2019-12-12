import React from "react";
import { useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import TextInput from 'react-native-textinput-with-icons';
import {TouchableOpacity} from 'react-native';
import {getData} from '../../requests';

export default function Login(props) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handlePress = (user, pass) => {
    let bodyData = {
      username: user,
      email: user,
      password: pass
    };
    console.log('Login Request');
    getData(
      "/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      },
      data => console.log(data)
    );
    return bodyData;
  };




  return (
    <View style={styles.logForm}>
        <View style={styles.register}>
        <Text style={{ fontSize: 35 }}>LOGIN FORM</Text>    
        </View>
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
        value={password}
        label={"Password"}

      />
<View style={styles.button}>
        <Button
          title='Login'
          onPress={() => handlePress(user, password)}
        />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  logForm: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#e2ebf0",
    width: "80%",
    height: "80%",
    minWidth: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10
  },
  inputBox: {
    height: 40,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10
  },
  button:{
    paddingTop: 40,
    width: '40%'
  },
  
});
