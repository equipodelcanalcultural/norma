import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {View, Text} from 'react-native';
import LikesButton from './LikesButton'
import { getData } from "../../store/actions/reduxFetch";
import serverurl from '../../../heroku';


const mapStateToProps = state => {
  return {
    logged: state.user.logged,
    user: state.user.currentUser.email,
    itinLiked: state.user.currentUser.itinerariesLiked,
    itineraries: state.itineraries.itineraries[0].likes
  };
};

const IconButton = ({ title, logged, user, itinLiked, itineraries }) => {
  const [likes, setLikes] = useState();
  const [refresh, setRefresh] = useState(false);

  console.log(user);
  console.log(itinLiked);
  console.log(itineraries);
  console.log(itineraries.includes(user));

  useEffect(() => {
    getData(`${serverurl}/api/itineraries/byTitle/${title}`, null, data => {
      setLikes(data[0].rating);
    });
  });

  

  const request = polaridad =>
    getData(
      `${serverurl}/api/itineraries/byTitle/${title}/${polaridad}`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: user
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      data => {
        console.log(data);
        setRefresh(!refresh);
      }
    );
    
    let polaridades;
    if (! itineraries.includes(user)) {
      polaridades = { positivo: "likes", negativo: "dislikes" };
    } else polaridades = { positivo: "dislikes", negativo: "likes" };
    console.log(polaridades);
    
    let likeButton;
    if (logged) { 
      likeButton = ( <LikesButton callback={request} positivo={polaridades.positivo
      } negativo={polaridades.negativo} />)
    } else {likeButton = <Text>Login to like</Text>}
  
   

  return (
    <>
      <div className="col-4 p-0 m-0">
        {likeButton}
        <h3>{likes}</h3>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(IconButton);
