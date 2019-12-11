import React from 'react'
import { useState } from "react";
import { View, Button, StyleSheet, Text } from 'react-native';
import TextInput from 'react-native-textinput-with-icons';
import { CheckBox } from 'react-native-elements'

export default function Register(props) {
  state = {
    username: '', password: '', email: '', isCreated: '', error: ''
  }

  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);



  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  const signUp = (username, password, email) => {
    let body = {
      username: username,
      password: password,
      email, email
    };
    return body;
  }


  return (
    <View style={styles.container}>
      <View style={styles.register}>
        <Text style={{ fontSize: 35 }}>REGISTRATION FORM</Text>
      </View>
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
    alignItems: 'center'
  },
  button: {
    paddingTop: 40,
    width: '30%'
  },
  register: {
    paddingBottom: '10%',
    fontFamily: 'Roboto'
  }
})