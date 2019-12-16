import React from "react";
import { useState } from "react";
import { Button, View, TextInput } from "react-native";

export default function CommentInput(props) {
  const [textInput, setTextInput] = useState();
  const { callback, placeholder, id } = props;
  console.log(textInput)
  return (
    <View>
      <TextInput
        onChangeText={e => {
          setTextInput(e);
        }}
        id="comments"
        type="text"
        placeholder={placeholder}
        value={textInput}
      ></TextInput>
      <Button
        variant="primary"
        type="submit"
        title="submit"
        onPress={() => {
          if (textInput != null) {
            callback(textInput, id);
          }
        }}
      >
        Send
      </Button>
    </View>
  );
}
