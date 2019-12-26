import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { View, Button, Text,ScrollView, Image } from 'react-native';
import CommentInput from './commentInput';
import Icon from 'react-native-vector-icons/AntDesign';
import User from '../../Assets/user.png'

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
      <Icon name="edit" style={{alignItems:'flex-end'}}
        title={'Edit'} size={10}
        onPress={() => {
          setElement(textBoxElement);
          console.log(id);}}>
        Edit
      </Icon>
    );
    deleteButton = (
      <Icon title={'Delete'} name="delete" size={15} 
      style={{color:'#6897bb',
      marginLeft:40,
      marginBottom:3,
      textShadowColor: "rgba(75, 69, 69, 0.2)",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 10}}onPress={() => deleteThisComment(id)}> Delete </Icon>
    );
  }

  /*Elemento que muestra un comentario y, si corresponde, dos botones (Edit, Delete) */
console.log('comment item', username)
  const commentElement = (
    <ScrollView style={{ margin:3, padding:1, backgroundColor:'#e8e8e8', flex:1, borderRadius:5}}>
      
      <Text style={{fontSize:15, marginLeft:10, color:'#616161'}}>{textoParaMostrar}</Text>
      
      {/* {editButton} */}
      {deleteButton}
    </ScrollView>
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
    algoParaMostrar = (<ScrollView style={{marginLeft:2}}>
      <Text h6 style={{color:'#6897bb', 
      fontWeight:'bold',
      textShadowColor: "rgba(75, 69, 69, 0.4)",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 10
    }}>{username}</Text>
      {element}
    </ScrollView>)
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