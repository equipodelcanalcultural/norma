import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-native";
 import Octicon, { Thumbsup, Thumbsdown } from "@primer/octicons-react"; 

const LikesButton = ({ callback, positivo, negativo }) => {
  const [like, setLike] = useState(false);

  const handleClick = polarity => {
    setLike(!like);
    callback(polarity);
  };

  let likesButton;
  let icons;
  if (positivo == 'likes') {
    icons = {positivo: Thumbsup, negativo: Thumbsdown}
  } else {icons = {positivo: Thumbsdown, negativo: Thumbsup} }
  if (like == true) {
    likesButton = (
      <Button className="" onClick={() => handleClick(negativo)}>
        <Octicon icon={icons.negativo} />
      </Button>
    );
  } else {
    likesButton = (
      <Button className="" onClick={() => handleClick(positivo)}>
        <Octicon icon={icons.positivo} size="small" />
      </Button>
    );
  }
  return <>{likesButton}</>;
};

export default LikesButton;
