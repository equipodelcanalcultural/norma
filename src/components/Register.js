import React from 'react'
import { useState } from "react";
import { View, Button, StyleSheet,  ImageBackground} from 'react-native';
import TextInput from 'react-native-textinput-with-icons';
import { CheckBox } from 'react-native-elements';
import { getData } from '../../requests';


export default function Register(props) {


  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);

  const signUp = (username, password, email) => {
    let bodyData = {
      username: username,
      password: password,
      email, email
    };
    getData("https://mytinerary-marta-norma.herokuapp.com/api/users/register",
    {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json"
      }
    },
    data => console.log("SUCCESS", data)
    )
  };


  return (

      <ImageBackground source={require('../Assets/navidad1.png')} style={styles.backgroundImage}>
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
        placeholderTextColor='white'
        onChangeText={email => setEmail(email)}
      //  onChange={handleChange}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        secureTextEntry={true}
        leftIcon="key"
        leftIconType="oct"
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={password => setPassword(password)}
      // onChange={handleChange}
      />
          <CheckBox title='Accept terms and conditions' 
          checkedIcon='check-square-o'
          uncheckedIcon='square-o'
          checked={check}
          onPress={() => setCheck(!check)}
          />
      <View style={styles.button}>
        <Button
          title='Sign Up'
          onPress={() => signUp(username, password, email)}
        />
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25%'
  },
  button: {
    width: '30%',
    paddingTop: '10%'
  },
  register: {
    paddingBottom: '10%',
  },
  backgroundImage: {
    flex: 1,
    
  }
})