import React from "react";
import { useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import {TouchableOpacity} from 'react-native';

export default function Login(props) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handlePress = (user, pass) => {
    let body = {
      username: user,
      password: pass
    };
    console.log(body);
    return body;
  };
  return (
    <View style={styles.logForm}>
      <TextInput
        style={styles.inputBox}
        onChangeText={text => setUser(text)}
        value={user}
        placeholder={"  Write your username  "}
      />

      <TextInput
        style={styles.inputBox}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder={"  Write your password  "}

      />
     <TouchableOpacity style={styles.submitButton} onPress={() => handlePress(user, password)}>
     <Text style={{textAlign:"center", fontSize:18, color:"white", backgroundColor: 'rgba(0,0,0,0)'}}>Submit</Text>
</TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  logForm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2ebf0",
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
  submitButton: {
    borderRadius: 10,
    width: '40%',
    backgroundColor: 'blue'
  }
  
});
