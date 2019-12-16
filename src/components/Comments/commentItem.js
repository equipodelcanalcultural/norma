import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { View, Button, Text } from 'react-native';
import CommentInput from './commentInput';


const CommentItem = ({ title,
  username,
  text,
  id,
  updateComment,
  deleteComment,
  logged,
  currentUser }) => {
  const [textoParaMostrar, setTextoParaMostrar] = useState(text);
  const [element, setElement] = useState();
  const [showSomething, setShowSomething] = useState(true);
  const [repeat, setRepeat] = useState(false);

  const updateThisComment = (input, targetId) => {
    setTextoParaMostrar(input);
    setElement(commentElement);
   // updateComment(input, targetId);
  }

  const deleteThisComment = (targetId) => {
    setShowSomething(false);
    deleteComment(targetId);
  }

  const updateAndReset= (input,targetId) =>{
    updateComment(input,targetId);
    setElement(regularItem)
  }
  /*Variables para render condicional de botones Edit y Delete.
    Si el usuario está loggeado y el comment pertenece a currentUser,
    aparecen los dos botones*/

  let editButton;
  let deleteButton;
  if (logged && currentUser == username) {
    editButton = (
      <Button
        title={'Edit'}
        onPress={() => {
          setElement(textBoxElement);
          console.log(id);
        }}
      >
        Edit
      </Button>
    );
    deleteButton = (
      <Button title={'Delete'} onPress={() => deleteThisComment(id)}> Delete </Button>
    );
  }

  /*Elemento que muestra un comentario y, si corresponde, dos botones (Edit, Delete) */

  const commentElement = (
    <View>
      <Text>{textoParaMostrar}</Text>
      {/* {editButton} */}
      {deleteButton}
    </View>
  );

  /*Textbox para editar comentarios que reemplaza al elemento anterior 
  cuando uno hace click en Edit*/

  const textBoxElement = (
    <View className="row justify-content-center">
      <CommentInput
        title={title}
        placeholder={text}
        callback={updateThisComment}
        id={id}
      ></CommentInput>
      <Button title={'Back'}
        onPress={() => {
          setElement(commentElement);
        }}
      >
        Back
      </Button>
    </View>
  );

  let algoParaMostrar;

  if (showSomething) {
    algoParaMostrar = (<View>
      <Text h6>{username}</Text>
      {element}
    </View>)
  }

  /*En el primer render se pone regularItem como valor del hook element*/
  useEffect(() => setElement(commentElement), []);

  console.log(textoParaMostrar);
  return (
    <Fragment>
      {algoParaMostrar}
    </Fragment>
  );
};

export default CommentItem;