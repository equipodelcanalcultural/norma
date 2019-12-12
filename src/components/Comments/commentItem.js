import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {View, Button, Text} from 'react-native';
import CommentInput from './commentInput';


const CommentItem = props => {
  const [element, setElement] = useState();
  const {
    key,
    title,
    username,
    text,
    id,
    updateComment,
    deleteComment,
    logged,
    currentUser
  } = props;

  /*Variables para render condicional de botones Edit y Delete.
    Si el usuario está loggeado y el comment pertenece a currentUser,
    aparecen los dos botones*/

  let editButton;
  let deleteButton;
  if (logged && currentUser == username) {
    editButton = (
      <Button
        onClick={() => {
          setElement(editItem);
          console.log(id);
        }}
      >
        Edit
      </Button>
    );
    deleteButton = (
      <Button onClick={() => deleteComment(id)}> Delete </Button>
    );
  }

  /*Elemento que muestra un comentario y, si corresponde, dos botones (Edit, Delete) */

  const regularItem = (
    <View>
      <Text>{text}</Text>
      {editButton}
      {deleteButton}
    </View>
  );

  /*Textbox para editar comentarios que reemplaza al elemento anterior 
  cuando uno hace click en Edit*/

  const editItem = (
    <View className="row justify-content-center">
      <CommentInput
        title={title}
        placeholder={text}
        callback={updateComment}
        id={id}
      ></CommentInput>
      <Button
        onClick={() => {
          setElement(regularItem);
        }}
      >
        Back
      </Button>
    </View>
  );

  /*En el primer render se pone regularItem como valor del hook element*/
  useEffect(() => setElement(regularItem), []);

  return (
    <Fragment>
      <Text h6>{username}</Text>
      {element}
    </Fragment>
  );
};
