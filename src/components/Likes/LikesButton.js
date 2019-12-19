import React from "react";
import { useState, useEffect } from "react";
import { Button, TouchableOpacity} from "react-native";
/*  import Octicon, { Thumbsup, Thumbsdown } from "@primer/octicons-react";  */
 //import {Ionicons} from '@expo/vector-icons';
 import Icon from 'react-native-vector-icons/Octicons';
 import EmptyIcon from 'react-native-vector-icons/SimpleLineIcons';
/* import { TouchableOpacity } from "react-native-gesture-handler"; */

const LikesButton = ({ callback, positivo, negativo }) => {
  const [like, setLike] = useState(false);

  const handleClick = polarity => {
    setLike(!like);
    callback(polarity);
  };

  let likesButton;
  let icons;
  if (positivo == 'likes') {
    icons = {
      positivo:  <Icon name="heart" size={25} color='red'/>,
      negativo: <EmptyIcon name="heart" size={22} color='red'/>
    }
  } else {
    icons = {
      positivo: <EmptyIcon name="heart" size={22} color='red'/>,
      negativo: <Icon name="heart" size={25} color='red'/>
    } 
  }
  if (like == true) {
    likesButton = (
      <TouchableOpacity className="" onPress={() => handleClick(positivo)}>
  { icons.negativo }
      </TouchableOpacity>
    );
  } else {
    likesButton = (
      <TouchableOpacity onPress={() => handleClick(negativo)}>
        {icons.positivo}
      </TouchableOpacity>
    );
  }
  return <>{likesButton}</>;
};

export default LikesButton;

 