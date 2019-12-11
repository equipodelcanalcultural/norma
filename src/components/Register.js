import React from 'react'
import {
  View,
  Button,
  StyleSheet,
  Text
} from 'react-native';

import { Icon } from 'react-native-elements'
import TextInput from 'react-native-textinput-with-icons'

export default class Register extends React.Component {
  state = {
    username: '', password: '', email: '', isCreated: '', error: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email } = this.state
    if (isCreated === true) {
      this.setState({ isCreated: true })
    } else if (created === false) {
      this.setState({ error: true })
    }
  }

  cleanForm = () => {
    this.setState({
      username: "",
      email: "",
      password: ""
    })
  }

  handleChange = async (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.username.length === 1 ||
      this.state.password.length === 1 ||
      this.state.email.length === 1) { this.setState({ error: false }) }
  }

  handleSubmit = async (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    //   await this.props.userPostFetch(this.state)
    //   const { created } = this.props;

  }

  render() {
    let { name } = this.state
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 35 }}>REGISTER PAPÁ O MAMÁ</Text>
       
        <TextInput
        label="Name"
        leftIcon="person"
        leftIconType="oct"
        rippleColor="blue"
        value={name}
        refrance={(refrance) => {
            this.input = refrance;
        }}
        onChangeText={name => this.setState({ name })}
      />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry={true}
          leftIcon="key"
          leftIconType="oct"
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
          onChange={this.handleChange}
        />
        <TextInput
          style={styles.input}
          label="Email"
          autoCapitalize="none"
          leftIcon="mention"
          leftIconType="oct"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
          onChange={this.handleChange}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
          onChange={this.handleChange}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
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
}
})