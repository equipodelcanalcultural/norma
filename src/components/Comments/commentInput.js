import React from "react";
import { useState } from "react";
import { Button, View, TextInput } from "react-native";

export default function CommentInput(props) {
  const [textInput, setTextInput] = useState();
  const { callback, placeholder, id } = props;
  return (
    <View>
      <TextInput
        onChange={e => {
          setTextInput(e.target.value);
        }}
        id="comments"
        type="text"
        placeholder={placeholder}
        value={textInput}
        width="10em"
      ></TextInput>
      <Button
        variant="primary"
        type="submit"
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          callback(textInput, id);
        }}
      >
        Send
      </Button>
    </View>
  );
}
