import React from "react";
import { useState } from "react";
import { Button, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function CommentInput(props) {
  const [textInput, setTextInput] = useState();
  const { callback, placeholder, id } = props;
  console.log(textInput)
  return (
    <View style={{flexDirection:'row',alignItems:'center',marginLeft:30,marginBottom:5}}>
      <TextInput 
        onChangeText={e => {
          setTextInput(e);
        }}
        id="comments"
        type="text"
        placeholder={placeholder}
        value={textInput}
      ></TextInput>
      <Icon size={15} style={{color:'#6897bb'}}
       name="edit"
        onPress={() => {
          if (textInput != null) {
            callback(textInput, id);
          }
        }}>
        Send
      </Icon>
    </View>
  );
}
